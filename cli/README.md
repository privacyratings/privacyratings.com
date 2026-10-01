# privacyratings

Search [Privacy Ratings](https://privacyratings.com) from your terminal. The ratings are open and testable, and cover the apps and services people use every day: email, VPNs, browsers, password managers and more than a hundred other categories.

![The privacyratings command showing rated alternatives to Gmail](https://raw.githubusercontent.com/privacyratings/privacyratings.com/main/cli/media/screenshot.svg)

## Install

macOS and Linux (standalone binary, no Node.js needed):

```sh
curl -fsSL https://privacyratings.com/install.sh | sh
```

Windows (PowerShell):

```powershell
irm https://privacyratings.com/install.ps1 | iex
```

npm (Node.js 20 or newer):

```sh
npm install -g privacyratings
```

Or run it once without installing: `npx privacyratings`.

The installers download the binary for your system from the [latest GitHub release](https://github.com/privacyratings/privacyratings.com/releases/latest) and check its SHA-256 checksum before installing it. `install.sh` installs to `/usr/local/bin` when you can write to it, and otherwise to `~/.local/bin`, without sudo. Set `PRIVACYRATINGS_BIN_DIR` to choose another folder; sudo is only used if you pick one you cannot write to. The standalone binaries need glibc on Linux; on Alpine and other musl systems, use npm.

## Use

```sh
privacyratings                          # interactive search
privacyratings "gmail alternatives"     # interactive search, starting with a query
privacyratings search vpn --picks       # print matching ratings
privacyratings show "Proton Mail"       # every criterion, with notes and evidence links
privacyratings open bitwarden           # open the rating in your browser
privacyratings picks password-managers  # our picks in one category
privacyratings categories               # every category and its id
privacyratings search email --json      # JSON for scripts
```

In the interactive search:

| Key | Action |
| --- | --- |
| Type | Filter. Try "open source", "alternatives" and category names. |
| ↑ ↓, Page Up, Page Down | Move |
| Enter | Full rating with notes and evidence |
| Tab | Picks only, or everything |
| Ctrl+O | Open the rating in your browser |
| Esc | Back, or quit |

Output is plain text when piped, and follows [`NO_COLOR`](https://no-color.org) and `FORCE_COLOR`.

## Updates

The tool checks for a new release once a day, in a background process that never slows down the command you ran. The standalone binary downloads the new version from GitHub over HTTPS, checks its size and SHA-256 checksum, checks that it runs, and then replaces itself; it never moves to an older version or a prerelease. A global npm install runs `npm install -g privacyratings@<version>`. Other installs, like `npx` or a project dependency, only print a notice. Run `privacyratings update` to update right away. If the binary is in a folder you cannot write to, updating needs `sudo privacyratings update`.

To turn automatic updates off, set `PRIVACYRATINGS_NO_UPDATE=1` or pass `--no-update`. They are also off when `CI` is set.

## Data and privacy

Ratings are downloaded from `https://privacyratings.com/api/` and cached for an hour, so the tool works offline with the last data it saw. The cache lives in `~/.cache/privacyratings` on Linux, `~/Library/Caches/privacyratings` on macOS and `%LOCALAPPDATA%\privacyratings\cache` on Windows. Set `PRIVACYRATINGS_CACHE` to use another folder. The folder is created readable only by you, and a folder that other users can write to (like `/tmp` itself) is not used.

The tool sends no analytics or telemetry. Its only requests are for ratings data and, once a day, the latest release from the GitHub API.

Ratings may be inaccurate or out of date and are not legal or security advice. Anyone can [submit a correction](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml).

## Development

```sh
cd cli
npm ci
npm test
node bin/privacyratings.js              # run from source
PRIVACYRATINGS_URL=http://localhost:8080 node bin/privacyratings.js   # against a local build of the site
npm run sea                             # build a standalone binary for this machine into dist/
```

The interface is HTML and CSS drawn in the terminal by [TermDOM](https://github.com/bikeshaving/termdom). Standalone binaries are [Node.js single executable applications](https://nodejs.org/api/single-executable-applications.html): `scripts/bundle.mjs` bundles the tool into one CommonJS file and `scripts/sea.mjs` injects it into a copy of Node.js.

### Releasing

```sh
cd cli
npx np
```

[np](https://github.com/sindresorhus/np) runs the tests, bumps the version (which also updates `src/version.js`), publishes to npm, pushes a `vX.Y.Z` tag and opens a GitHub release draft. Publishing the release runs the [CLI release workflow](../.github/workflows/cli-release.yml), which builds binaries for Linux, macOS and Windows on x64 and arm64 and attaches them with `SHA256SUMS` and the install scripts.

## License

MIT
