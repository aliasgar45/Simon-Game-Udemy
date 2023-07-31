import { RESET } from 'jotai/utils';
import { useAtom, WritableAtom } from 'jotai';
import { PaginatedQueryRequest } from './../typings/request';
import paginationMerger from './../utils/pagination-merger';
import { useCallback, useEffect } from 'react';
import useRefresh from './use-refresh';

export type SetStateActionWithReset<Value> =
  | Value
  | typeof RESET
  | ((prev: Value) => Value | typeof RESET);

interface DefaultPaginationTypes {
  hasMore: boolean;
}

interface UsePaginatedQueryResult<T, K> {
  data: Array<T>;
  paginationData: K & DefaultPaginationTypes;
}

interface UsePaginatedQueryArgs<T, K> {
  getter: (
    paginationData: K | undefined
  ) => Promise<UsePaginatedQueryResult<T, K>>;
  merger?: (data: Array<T> | undefined, newData: Array<T>) => Array<T>;
  requestAtom: WritableAtom<
    PaginatedQueryRequest<T, K>,
    SetStateActionWithReset<PaginatedQueryRequest<T, K>>,
    void
  >;
  refreshEventType?: string; // TODO add enum here
  onFirstFetch?: (data: Array<T> | undefined) => void;
}

export default function usePaginatedQuery<T, K>({
  getter,
  merger = (data: Array<T> | undefined, newData: Array<T>) =>
    paginationMerger<T>(data, newData),
  requestAtom,
  onFirstFetch,
  refreshEventType
}: UsePaginatedQueryArgs<T, K>) {
  const [requestData, setRequestData] = useAtom(requestAtom);

  const fetcher = useCallback(
    async ({
      data,
      paginationData,
      fetchingNextPage = false
    }: {
      data?: Array<T>;
      paginationData?: UsePaginatedQueryResult<T, K>['paginationData'];
      fetchingNextPage?: boolean;
    } = {}) => {
      setRequestData((reqData) => ({
        ...reqData,
        loading: !fetchingNextPage
      }));

      try {
        const { data: newData, paginationData: newMetaData } = await getter(
          paginationData
        );
        const dataToSet = merger(fetchingNextPage ? data : [], newData);
        setRequestData({
          isFetchingMore: false,
          loading: false,
          error: undefined,
          data: dataToSet,
          fetched: true,
          paginationData: newMetaData,
          refreshing: false
        });

        return dataToSet;
      } catch (error: any) {
        setRequestData((reqData) => ({
          ...reqData,
          loading: false,
          fetched: true,
          isFetchingMore: false,
          refreshing: false,
          error
        }));
      }
    },
    [merger, getter, setRequestData]
  );

  const refresh = useCallback(async () => {
    const { data, fetched } = requestData;
    setRequestData({
      loading: false,
      fetched: fetched,
      refreshing: true,
      isFetchingMore: false
    });
    try {
      await fetcher({ data, fetchingNextPage: false });
    } catch (error: any) {
      setRequestData({
        loading: false,
        fetched: true,
        isFetchingMore: false,
        refreshing: false,
        error
      });
    }
  }, [fetcher, requestData, setRequestData]);

  useEffect(() => {
    if (!requestData.fetched && !requestData.loading) {
      fetcher()
        .then((data) => {
          onFirstFetch?.(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fetcher, requestData, onFirstFetch]);

  useRefresh({ refreshEventType, onRefresh: refresh });

  const fetchMore = useCallback(async () => {
    const { isFetchingMore, paginationData, data } = requestData;
    if (!isFetchingMore && paginationData?.hasMore) {
      setRequestData({ ...requestData, loading: false, isFetchingMore: true });
      await fetcher({ data, paginationData, fetchingNextPage: true });
    }
  }, [fetcher, requestData, setRequestData]);

  return {
    requestData,
    fetchMore,
    refresh
  };
}
