export type APIErrorData = {
  statusCode: number;
  error: string;
  message: string;
};

export default class APIError extends Error {
  statusCode: number;

  error: string;

  constructor({ statusCode, error, message }: APIErrorData) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}
