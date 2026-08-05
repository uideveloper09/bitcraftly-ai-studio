/**
 * API response envelope helpers.
 */

export function createApiSuccess<T>(data: T, meta?: Record<string, unknown>) {
  return {
    success: true as const,
    data,
    ...(meta ? { meta } : {}),
  };
}

export function createApiError(code: string, message: string, details?: unknown) {
  return {
    success: false as const,
    error: {
      code,
      message,
      ...(details !== undefined ? { details } : {}),
    },
  };
}

export function isApiSuccess<T>(response: {
  success: boolean;
}): response is { success: true; data: T } {
  return response.success === true;
}
