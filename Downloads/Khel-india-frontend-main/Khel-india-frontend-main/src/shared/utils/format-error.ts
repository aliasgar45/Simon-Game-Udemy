function toError(maybeError: unknown): Error {
  if (maybeError instanceof Error) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error while stringifying the maybeError
    return new Error(String(maybeError));
  }
}

export function formatError(error: unknown) {
  return toError(error);
}
