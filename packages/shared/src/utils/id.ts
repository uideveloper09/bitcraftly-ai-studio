/**
 * ID generation helpers (non-cryptographic for UI / client keys).
 */

export function createId(prefix?: string): string {
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

  return prefix ? `${prefix}_${id}` : id;
}

export function createShortId(length = 8): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)] ?? 'x';
  }
  return result;
}
