import { atom } from 'jotai';
import { atomFamily, atomWithReset } from 'jotai/utils';
import {
  PaginatedQueryRequest,
  PaginatedQueryRequestFamilyParam,
  QueryRequest,
  QueryRequestFamilyParam
} from '../typings/request';

type CreateRequestAtomParams<T> = { data?: T };

type CreatePaginatedRequestAtomParams<T, K> = {
  data?: Array<T>;
  loading?: boolean;
  paginationData?: K & { hasMore: boolean };
};

export function createRequestAtom<T>({
  data
}: CreateRequestAtomParams<T> = {}) {
  return atom<QueryRequest<T>>({
    loading: !data,
    refreshing: !!data,
    data
  });
}

export function createRequestFamily<T>({
  data
}: CreateRequestAtomParams<T> = {}) {
  return atomFamily(
    (param: QueryRequestFamilyParam<T>) => {
      return atom<QueryRequest<T>>({
        loading: !data,
        refreshing: !!data,
        data
      });
    },
    (a: QueryRequestFamilyParam<T>, b: QueryRequestFamilyParam<T>) =>
      a.id === b.id
  );
}

export function createPaginatedRequestAtom<T, K>({
  data,
  loading,
  paginationData
}: CreatePaginatedRequestAtomParams<T, K> = {}) {
  return atomWithReset<PaginatedQueryRequest<T, K>>({
    loading: typeof loading !== 'undefined' ? loading : !data,
    isFetchingMore: false,
    data,
    paginationData
  });
}

export function createPaginatedRequestFamily<T, K>({
  data,
  loading,
  paginationData
}: CreatePaginatedRequestAtomParams<T, K> = {}) {
  return atomFamily(
    (param: PaginatedQueryRequestFamilyParam<T, K>) => {
      return atomWithReset<PaginatedQueryRequest<T, K>>({
        loading: typeof loading !== 'undefined' ? loading : !data,
        isFetchingMore: false,
        data,
        fetched: false,
        paginationData
      });
    },
    (
      a: PaginatedQueryRequestFamilyParam<T, K>,
      b: PaginatedQueryRequestFamilyParam<T, K>
    ) => a.id === b.id
  );
}
