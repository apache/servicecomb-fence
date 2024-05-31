import { CommonError } from '@/types/global';

export function isCommonError(error: unknown): error is CommonError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export default class BaseUtils {
  public static getErrorMessage(error: unknown): string {
    return this.convertToCommonError(error).message;
  }

  private static convertToCommonError(error: unknown): CommonError {
    if (isCommonError(error)) {
      return error;
    }
    try {
      return new Error(JSON.stringify(error));
    } catch (e) {
      return new Error(String(error));
    }
  }
}
