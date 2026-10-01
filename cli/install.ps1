# Installs the privacyratings command-line tool on Windows from the latest GitHub release.
#
#   irm https://privacyratings.com/install.ps1 | iex
#
# Installs to %LOCALAPPDATA%\Programs\privacyratings and adds it to your user PATH.
# Options (environment variables): PRIVACYRATINGS_BIN_DIR (install folder) and
# PRIVACYRATINGS_VERSION (a release tag such as v1.2.0; default: latest).
# The binary includes Node.js and updates itself once a day (set PRIVACYRATINGS_NO_UPDATE=1 to turn that off).

# Everything runs inside one script block, so nothing runs until all of it has downloaded,
# and nothing it defines is left behind in your session.
& {
  $ErrorActionPreference = 'Stop'
  $ProgressPreference = 'SilentlyContinue'
  # Windows PowerShell 5.1 may default to TLS 1.0, which GitHub refuses.
  [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

  $repo = 'privacyratings/privacyratings.com'

  # The real processor, even when this PowerShell runs under x64 emulation on ARM64.
  $osArch = $null
  try { $osArch = [string][System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture } catch { }
  if (-not $osArch) { $osArch = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE } }
  $arch = switch -Regex ($osArch) {
    '^(Arm64|ARM64)$' { 'arm64' }
    '^(X64|AMD64)$' { 'x64' }
    default { throw "Unsupported processor $osArch. Install with npm instead: npm install -g privacyratings" }
  }
  $asset = "privacyratings-win-$arch.exe"

  if ($env:PRIVACYRATINGS_VERSION) {
    if ($env:PRIVACYRATINGS_VERSION -notmatch '^v\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$') { throw 'PRIVACYRATINGS_VERSION must be a release tag like v1.2.0' }
    $base = "https://github.com/$repo/releases/download/$($env:PRIVACYRATINGS_VERSION)"
  } else {
    $base = "https://github.com/$repo/releases/latest/download"
  }
  $dir = if ($env:PRIVACYRATINGS_BIN_DIR) { $env:PRIVACYRATINGS_BIN_DIR } else { Join-Path $env:LOCALAPPDATA 'Programs\privacyratings' }
  $dir = [System.IO.Path]::GetFullPath($dir)
  $exe = Join-Path $dir 'privacyratings.exe'
  $tmp = Join-Path ([System.IO.Path]::GetTempPath()) ('privacyratings-' + [guid]::NewGuid())
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  New-Item -ItemType Directory -Path $tmp | Out-Null

  try {
    Write-Host "Downloading $asset..."
    Invoke-WebRequest -UseBasicParsing -Uri "$base/$asset" -OutFile "$tmp\privacyratings.exe"
    Invoke-WebRequest -UseBasicParsing -Uri "$base/SHA256SUMS" -OutFile "$tmp\SHA256SUMS"
    $want = Get-Content "$tmp\SHA256SUMS" |
      ForEach-Object { if ($_ -match '^([0-9a-fA-F]{64}) [ *](.+)$' -and $Matches[2].Trim() -ceq $asset) { $Matches[1].ToLower() } } |
      Select-Object -First 1
    $got = (Get-FileHash "$tmp\privacyratings.exe" -Algorithm SHA256).Hash.ToLower()
    if (-not $want -or $want -ne $got) { throw 'Checksum mismatch. The download was not installed.' }

    # Check that the binary runs here before installing it.
    $printed = $null
    try { $printed = & "$tmp\privacyratings.exe" --version } catch { }
    if ($LASTEXITCODE -ne 0 -or -not $printed) { throw 'The downloaded binary does not run on this system. Install with npm instead: npm install -g privacyratings' }

    # A running privacyratings.exe cannot be overwritten, but it can be renamed out of the way.
    if (Test-Path $exe) {
      Remove-Item -Force "$exe.old" -ErrorAction SilentlyContinue
      Move-Item -Force $exe "$exe.old"
    }
    try {
      Move-Item -Force "$tmp\privacyratings.exe" $exe
    } catch {
      if (Test-Path "$exe.old") { Move-Item -Force "$exe.old" $exe }
      throw
    }
    Remove-Item -Force "$exe.old" -ErrorAction SilentlyContinue
  } finally {
    Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
  }

  # Add to the user PATH. The raw registry value keeps entries like %USERPROFILE%\bin as they
  # are ([Environment]::GetEnvironmentVariable would expand them and save them expanded).
  $key = Get-Item -Path 'HKCU:\Environment'
  $path = [string]$key.GetValue('Path', '', 'DoNotExpandEnvironmentNames')
  $entries = @($path -split ';' | Where-Object { $_ })
  if (-not ($entries | Where-Object { $_.TrimEnd('\') -ieq $dir.TrimEnd('\') })) {
    Set-ItemProperty -Path 'HKCU:\Environment' -Name 'Path' -Type ExpandString -Value (($entries + $dir) -join ';')
    # Tell Windows the environment changed, so new terminals see it.
    [Environment]::SetEnvironmentVariable('PRIVACYRATINGS_INSTALL', '1', 'User')
    [Environment]::SetEnvironmentVariable('PRIVACYRATINGS_INSTALL', $null, 'User')
    Write-Host "Added $dir to your PATH. Open a new terminal to use it."
  }
  # This terminal too.
  if (-not (@($env:Path -split ';') | Where-Object { $_.TrimEnd('\') -ieq $dir.TrimEnd('\') })) { $env:Path = "$env:Path;$dir" }
  Write-Host "Installed $(& $exe --version) to $dir"
  Write-Host 'Run: privacyratings            interactive search'
  Write-Host '     privacyratings --help     all commands'
}
