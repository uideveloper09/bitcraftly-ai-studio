/**
 * Date formatting helpers.
 */

const DEFAULT_LOCALE = 'en-US';

export function formatDate(
  value: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  locale = DEFAULT_LOCALE,
): string {
  return new Intl.DateTimeFormat(locale, options).format(toDate(value));
}

export function formatDateTime(value: Date | string | number, locale = DEFAULT_LOCALE): string {
  return formatDate(
    value,
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    },
    locale,
  );
}

export function formatRelativeTime(value: Date | string | number, locale = DEFAULT_LOCALE): string {
  const date = toDate(value);
  const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000);
  const abs = Math.abs(diffSeconds);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (abs < 60) return rtf.format(diffSeconds, 'second');
  if (abs < 3600) return rtf.format(Math.round(diffSeconds / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(diffSeconds / 3600), 'hour');
  if (abs < 604800) return rtf.format(Math.round(diffSeconds / 86400), 'day');
  return formatDate(date, undefined, locale);
}

function toDate(value: Date | string | number): Date {
  return value instanceof Date ? value : new Date(value);
}
