/**
 * Error helpers for typed application failures.
 */

import { ERROR_CODES } from '../constants/index.js';

export class AppError extends Error {
  readonly code: string;
  readonly statusCode: number;
  readonly details?: unknown;

  constructor(
    code: string,
    message: string,
    options?: { statusCode?: number; details?: unknown; cause?: unknown },
  ) {
    super(message, options?.cause !== undefined ? { cause: options.cause } : undefined);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = options?.statusCode ?? 500;
    this.details = options?.details;
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

export function toAppError(error: unknown): AppError {
  if (isAppError(error)) return error;
  if (error instanceof Error) {
    return new AppError(ERROR_CODES.INTERNAL_ERROR, error.message, { cause: error });
  }
  return new AppError(ERROR_CODES.INTERNAL_ERROR, 'An unexpected error occurred', {
    details: error,
  });
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unexpected error occurred';
}
