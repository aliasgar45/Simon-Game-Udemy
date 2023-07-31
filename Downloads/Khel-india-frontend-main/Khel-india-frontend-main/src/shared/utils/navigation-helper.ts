import { QUERY_PARAM_BASE_KEY } from '../constants';

type UniqueQueryParamArgs = {
  baseKey?: string;
};

export function getCurrentUrlWithUniqueQueryParam({
  baseKey = QUERY_PARAM_BASE_KEY
}: UniqueQueryParamArgs = {}) {
  const { href } = window.location;
  const url = new URL(href);
  const urlSearchParams = url.searchParams;
  const uniqueKey = `${baseKey}${Date.now()}${Math.random() * 100}`;
  urlSearchParams.set(uniqueKey, 'true');
  return { url: `${url.pathname}?${urlSearchParams.toString()}`, uniqueKey };
}
