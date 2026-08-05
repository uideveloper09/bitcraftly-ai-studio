/**
 * Structured logger — no framework coupling.
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface Logger {
  debug: (message: string, context?: Record<string, unknown>) => void;
  info: (message: string, context?: Record<string, unknown>) => void;
  warn: (message: string, context?: Record<string, unknown>) => void;
  error: (message: string, context?: Record<string, unknown>) => void;
}

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

function shouldLog(level: LogLevel, minLevel: LogLevel): boolean {
  return LEVEL_ORDER[level] >= LEVEL_ORDER[minLevel];
}

function write(
  level: LogLevel,
  scope: string,
  message: string,
  context?: Record<string, unknown>,
): void {
  const payload = {
    level,
    scope,
    message,
    timestamp: new Date().toISOString(),
    ...(context ? { context } : {}),
  };

  const line = JSON.stringify(payload);

  if (level === 'error') {
    console.error(line);
    return;
  }
  if (level === 'warn') {
    console.warn(line);
    return;
  }
  console.info(line);
}

export function createLogger(scope: string, minLevel: LogLevel = 'info'): Logger {
  return {
    debug: (message, context) => {
      if (shouldLog('debug', minLevel)) write('debug', scope, message, context);
    },
    info: (message, context) => {
      if (shouldLog('info', minLevel)) write('info', scope, message, context);
    },
    warn: (message, context) => {
      if (shouldLog('warn', minLevel)) write('warn', scope, message, context);
    },
    error: (message, context) => {
      if (shouldLog('error', minLevel)) write('error', scope, message, context);
    },
  };
}
