#!/bin/sh
# Installs the privacyratings command-line tool from the latest GitHub release.
#
#   curl -fsSL https://privacyratings.com/install.sh | sh
#
# Options (environment variables):
#   PRIVACYRATINGS_BIN_DIR   Where to install (default: /usr/local/bin when you can write to it,
#                            otherwise ~/.local/bin). sudo is only used when you set this to a
#                            folder you cannot write to.
#   PRIVACYRATINGS_VERSION   A release tag such as v1.2.0 (default: latest)
#
# The binary includes Node.js, so nothing else is needed. It updates itself once a day;
# set PRIVACYRATINGS_NO_UPDATE=1 to turn that off.

# Everything is inside main(), which runs only after the whole script has downloaded, so a
# dropped connection cannot run half of it.
main() {
  set -eu
  umask 022

  REPO="privacyratings/privacyratings.com"
  NAME="privacyratings"

  case "$(uname -s)" in
    Linux*) OS=linux ;;
    Darwin*) OS=darwin ;;
    MINGW*|MSYS*|CYGWIN*) fail "On Windows, run in PowerShell: irm https://privacyratings.com/install.ps1 | iex" ;;
    *) fail "Unsupported system $(uname -s). Install with npm instead: npm install -g $NAME" ;;
  esac

  case "$(uname -m)" in
    x86_64|amd64) ARCH=x64 ;;
    aarch64|arm64) ARCH=arm64 ;;
    *) fail "Unsupported processor $(uname -m). Install with npm instead: npm install -g $NAME" ;;
  esac

  # Apple silicon running a Rosetta shell still gets the native binary.
  if [ "$OS" = darwin ] && [ "$ARCH" = x64 ] && [ "$(sysctl -n sysctl.proc_translated 2>/dev/null || echo 0)" = 1 ]; then ARCH=arm64; fi

  # A 64-bit kernel with a 32-bit userland cannot run the 64-bit binary.
  if [ "$OS" = linux ] && command -v getconf >/dev/null 2>&1 && [ "$(getconf LONG_BIT 2>/dev/null || echo 64)" = 32 ]; then
    fail "32-bit systems are not supported. Install with npm instead: npm install -g $NAME"
  fi

  # The binaries are built against glibc and do not run on musl systems such as Alpine. A glibc
  # system can have musl installed next to it (Debian's musl package adds /lib/ld-musl-*), so
  # glibc is checked for first.
  if [ "$OS" = linux ] && ! getconf GNU_LIBC_VERSION >/dev/null 2>&1; then
    if { command -v ldd >/dev/null 2>&1 && ldd --version 2>&1 | grep -qi musl; } || ls /lib/ld-musl-* >/dev/null 2>&1; then
      fail "musl-based systems like Alpine are not supported by the standalone binary. Install with npm instead: npm install -g $NAME"
    fi
  fi

  ASSET="$NAME-$OS-$ARCH"
  if [ -n "${PRIVACYRATINGS_VERSION:-}" ]; then
    case "$PRIVACYRATINGS_VERSION" in
      v[0-9]*.[0-9]*.[0-9]*) ;;
      *) fail "PRIVACYRATINGS_VERSION must be a release tag like v1.2.0" ;;
    esac
    case "$PRIVACYRATINGS_VERSION" in
      *[!0-9A-Za-z.v-]*) fail "PRIVACYRATINGS_VERSION must be a release tag like v1.2.0" ;;
    esac
    BASE="https://github.com/$REPO/releases/download/$PRIVACYRATINGS_VERSION"
  else
    BASE="https://github.com/$REPO/releases/latest/download"
  fi

  if command -v sha256sum >/dev/null 2>&1; then SHA="sha256sum"
  elif command -v shasum >/dev/null 2>&1; then SHA="shasum -a 256"
  else fail "sha256sum or shasum is required to check the download"; fi

  TMP="$(mktemp -d 2>/dev/null || mktemp -d -t privacyratings)"
  [ -n "$TMP" ] && [ -d "$TMP" ] || fail "Could not create a temporary folder"
  trap 'rm -rf "$TMP"' EXIT
  trap 'exit 130' INT
  trap 'exit 143' TERM

  say "Downloading $ASSET…"
  fetch "$BASE/$ASSET" "$TMP/$NAME" || fail "Download failed. Check https://github.com/$REPO/releases"
  fetch "$BASE/SHA256SUMS" "$TMP/SHA256SUMS" || fail "Could not download checksums"

  WANT="$(awk -v a="$ASSET" '($2 == a || $2 == "*" a) && $1 ~ /^[0-9a-fA-F]+$/ && length($1) == 64 { print tolower($1); exit }' "$TMP/SHA256SUMS")"
  GOT="$($SHA "$TMP/$NAME" | awk '{ print tolower($1) }')"
  if [ -z "$WANT" ] || [ "$WANT" != "$GOT" ]; then fail "Checksum mismatch. The download was not installed."; fi
  chmod 755 "$TMP/$NAME"

  # macOS marks downloads as quarantined; the binary is ad-hoc signed.
  if [ "$OS" = darwin ]; then xattr -d com.apple.quarantine "$TMP/$NAME" 2>/dev/null || true; fi

  # Check that the binary runs here before installing it. Its stdin is /dev/null: with
  # `curl ... | sh`, stdin is this script.
  "$TMP/$NAME" --version </dev/null >/dev/null 2>&1 || fail "The downloaded binary does not run on this system. Install with npm instead: npm install -g $NAME"

  SUDO=""
  if [ -n "${PRIVACYRATINGS_BIN_DIR:-}" ]; then
    DIR="$PRIVACYRATINGS_BIN_DIR"
    mkdir -p "$DIR" 2>/dev/null || true
    if [ ! -w "$DIR" ]; then
      command -v sudo >/dev/null 2>&1 || fail "Cannot write to $DIR"
      say "Installing to $DIR needs administrator rights, so sudo will ask for your password."
      SUDO="sudo"
      sudo mkdir -p "$DIR"
    fi
  else
    DIR="/usr/local/bin"
    # Without sudo, so the tool can also update itself later.
    if [ ! -d "$DIR" ] || [ ! -w "$DIR" ]; then
      [ -n "${HOME:-}" ] || fail "HOME is not set. Set PRIVACYRATINGS_BIN_DIR to the folder to install to."
      DIR="$HOME/.local/bin"
      mkdir -p "$DIR"
    fi
  fi

  # Copy next to the destination, then rename: the swap is atomic, and replacing a binary that
  # is running does not fail with "Text file busy".
  $SUDO cp "$TMP/$NAME" "$DIR/.$NAME.new.$$"
  $SUDO chmod 755 "$DIR/.$NAME.new.$$"
  $SUDO mv -f "$DIR/.$NAME.new.$$" "$DIR/$NAME" || { $SUDO rm -f "$DIR/.$NAME.new.$$"; fail "Could not install to $DIR"; }

  say ""
  say "Installed $("$DIR/$NAME" --version </dev/null 2>/dev/null || echo "") to $DIR/$NAME"
  case ":$PATH:" in
    *":$DIR:"*) ;;
    *) say "Add $DIR to your PATH:  export PATH=\"$DIR:\$PATH\"" ;;
  esac
  if [ -n "$SUDO" ]; then say "Automatic updates need write access to $DIR. Run \"sudo $NAME update\" to update."; fi
  say ""
  say "Run:  $NAME            interactive search"
  say "      $NAME --help     all commands"
}

say() { printf '%s\n' "$*"; }
fail() { printf 'Error: %s\n' "$*" >&2; exit 1; }

# HTTPS only, TLS 1.2 or newer, including on redirects.
fetch() {
  if command -v curl >/dev/null 2>&1; then
    curl --proto '=https' --tlsv1.2 -fsSL --retry 3 --max-filesize 314572800 "$1" -o "$2"
  elif command -v wget >/dev/null 2>&1; then
    if wget --help 2>&1 | grep -q -- --https-only; then
      wget -q --https-only --secure-protocol=TLSv1_2 "$1" -O "$2"
    else
      fail "Your wget cannot be limited to HTTPS. Install curl and try again."
    fi
  else
    fail "curl or wget is required"
  fi
}

main "$@"
