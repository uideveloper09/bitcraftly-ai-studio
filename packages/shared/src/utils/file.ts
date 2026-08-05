/**
 * File / media path helpers.
 */

export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  if (parts.length < 2) return '';
  return (parts.at(-1) ?? '').toLowerCase();
}

export function getBasename(path: string): string {
  const normalized = path.replace(/\\/g, '/');
  const segment = normalized.split('/').filter(Boolean).at(-1);
  return segment ?? path;
}

export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'] as const;
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** i;
  return `${value.toFixed(decimals)} ${units[i]}`;
}

export function isAllowedMimeType(mimeType: string, allowed: readonly string[]): boolean {
  return allowed.includes(mimeType);
}
