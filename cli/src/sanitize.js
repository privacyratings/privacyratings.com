// Ratings data is written by contributors, so every string from it is untrusted before it
// reaches the terminal. clean() removes anything a terminal could interpret instead of print:
// C0 controls (ESC, BEL, CR...), DEL, C1 controls (0x80-0x9F, including the 8-bit CSI and
// OSC introducers), Unicode bidi overrides and isolates, and line/paragraph separators.
// Tabs and newlines become spaces, because every field is shown on one line or reflowed.

const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069\ufeff\ufff9-\ufffb]/g;
const SPACE = /[\t\n\r\u2028\u2029]/g;

export function clean(value) {
  if (value === null || value === undefined) return '';
  const s = typeof value === 'string' ? value : typeof value === 'number' || typeof value === 'boolean' ? String(value) : '';
  return s.replace(SPACE, ' ').replace(CONTROL, '');
}

// Returns the normalized URL when it is a plain http(s) URL without credentials, else null.
export function safeUrl(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;
  let u;
  try {
    u = new URL(value);
  } catch {
    return null;
  }
  if ((u.protocol !== 'https:' && u.protocol !== 'http:') || u.username || u.password || !u.hostname) return null;
  // URL serialization percent-encodes spaces, quotes and controls; refuse anything else odd.
  return /^[\x21-\x7e]+$/.test(u.href) ? u.href : null;
}

// Slugs and category ids are used in URLs and file names, so only lowercase letters,
// digits and dashes are accepted.
export const isSlug = (s) => typeof s === 'string' && /^[a-z0-9][a-z0-9-]{0,99}$/.test(s);
