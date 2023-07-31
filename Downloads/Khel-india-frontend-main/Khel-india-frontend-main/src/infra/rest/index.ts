import requestConfig from '../../shared/config/request';
import APIError, { APIErrorData } from '../../shared/errors/api-error';
import NetworkError from '../../shared/errors/network-error';
import index from '../sentry';

enum Methods {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

interface MakeRequest {
  url: string;
  options?: RequestInit & { queryParams?: Record<string, string | undefined> };
  isAuthRequired?: boolean;
  useDefaultHeaders?: boolean;
}

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

async function parseResponseToJson<T>(response: Response) {
  if (response.headers.get('Content-Length') === '0') {
    return undefined as unknown as T;
  }

  try {
    const result = (await response.json()) as T;
    return result;
  } catch (parseToJsonError) {
    throw new Error('Failed to parse json response');
  }
}

export async function makeRequest<T>({
  url,
  options,
  isAuthRequired = false,
  useDefaultHeaders = true
}: MakeRequest): Promise<T> {
  // init the token as a string or undefined
  let token: string | undefined;

  // if the flag isAuthRequired is true
  if (isAuthRequired) {
    // get the auth token from firebase and assign the same to token
    // token = await getFirebaseToken();
    token = '';
  }

  let reqUrl = `${requestConfig.baseUrl}${url}`;

  const { method = Methods.GET, body, headers, queryParams } = options ?? {};

  if (queryParams) {
    reqUrl = `${reqUrl}?${Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
  }

  let response: Response;
  try {
    response = await fetch(reqUrl, {
      method,
      body,
      headers: {
        ...(useDefaultHeaders && defaultHeaders),
        ...headers,
        ...(token && { Authorization: token })
      }
    });
  } catch (requestError) {
    index(requestError as Error);
    throw new NetworkError();
  }

  if (!response.ok) {
    const errorResult = await parseResponseToJson<APIErrorData>(response);
    const error = new APIError(errorResult);
    index(error);
    throw new APIError(errorResult);
  }

  if (response.status !== 204) {
    return parseResponseToJson<T>(response);
  }

  return undefined as unknown as T;
}

export async function get<T>({
  url,
  options,
  isAuthRequired = false
}: MakeRequest): Promise<T> {
  return makeRequest<T>({
    url,
    options: {
      ...options,
      method: Methods.GET
    },
    isAuthRequired
  });
}

export async function post<T>({
  url,
  options,
  isAuthRequired = false,
  useDefaultHeaders = true
}: MakeRequest): Promise<T> {
  return makeRequest<T>({
    url,
    options: {
      ...options,
      method: Methods.POST
    },
    isAuthRequired,
    useDefaultHeaders
  });
}

export async function put<T>({
  url,
  options,
  isAuthRequired = false
}: MakeRequest): Promise<T> {
  return makeRequest<T>({
    url,
    options: {
      ...options,
      method: Methods.PUT
    },
    isAuthRequired
  });
}

export async function patch<T>({
  url,
  options,
  isAuthRequired = false
}: MakeRequest): Promise<T> {
  return makeRequest<T>({
    url,
    options: {
      ...options,
      method: Methods.PATCH
    },
    isAuthRequired
  });
}

export async function deleteReq<T>({
  url,
  options,
  isAuthRequired = false
}: MakeRequest): Promise<T> {
  return makeRequest<T>({
    url,
    options: {
      ...options,
      method: Methods.DELETE
    },
    isAuthRequired
  });
}
