// Opens a URL in the default browser without waiting for it.
//
// Only http(s) URLs on the ratings site are opened (the only links the tool opens are
// rating pages). No shell is involved on any platform: on Windows, `cmd /c start` would
// parse & | ^ % and quotes in the URL, so the URL goes to rundll32's URL handler instead.

import { spawn } from 'node:child_process';
import { SITE } from './data.js';
import { safeUrl } from './sanitize.js';

export function browserCommand(url, platform = process.platform) {
  if (platform === 'darwin') return ['open', [url]];
  if (platform === 'win32') return [`${process.env.SystemRoot || 'C:\\Windows'}\\System32\\rundll32.exe`, ['url.dll,FileProtocolHandler', url]];
  return ['xdg-open', [url]];
}

// Returns the URL to open, or null when it is not one the tool should open.
export function openableUrl(url, site = SITE) {
  const href = safeUrl(url);
  if (!href) return null;
  return new URL(href).origin === new URL(site).origin ? href : null;
}

export function openUrl(url) {
  const href = openableUrl(url);
  if (!href) return false;
  const [cmd, args] = browserCommand(href);
  try {
    spawn(cmd, args, { detached: true, stdio: 'ignore', windowsHide: true, shell: false }).on('error', () => {}).unref();
    return true;
  } catch {
    // No browser available, for example over SSH. The URL is printed elsewhere.
    return false;
  }
}
