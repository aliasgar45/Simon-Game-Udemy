import { useCallback, useEffect, useRef } from 'react';
import { PrimitiveAtom, useAtom } from 'jotai';
import { QueryRequest } from '../typings/request';
import useRefresh, { UseRefreshArgs } from './use-refresh';

type WithInitialValue<Value> = {
  init: Value;
};

type QueryRequestParams<T> = {
  requestAtom: PrimitiveAtom<QueryRequest<T>> &
    WithInitialValue<QueryRequest<T>>;
  queryFunction?: (...args: any) => Promise<T>;
  refreshEventType?: UseRefreshArgs['refreshEventType'];
  cacheData?: boolean;
};

export default function useQuery<T>({
  requestAtom,
  queryFunction,
  refreshEventType,
  cacheData
}: QueryRequestParams<T>) {
  const [requestData, setRequestData] = useAtom(requestAtom);
  const dataRef = useRef(requestData?.data);
  dataRef.current = requestData?.data;

  const setData = useCallback(
    (data: T) => {
      setRequestData({
        ...requestData,
        data
      });
    },
    [requestData, setRequestData]
  );

  const fetchData = useCallback(
    async (refresh?: boolean) => {
      if (typeof queryFunction !== 'function') {
        return;
      }

      if (refresh) {
        setRequestData((prev) => {
          return {
            ...prev,
            loading: false,
            refreshing: true,
            error: undefined
          };
        });
      }

      if (!refresh && cacheData && dataRef.current) {
        return;
      }

      return queryFunction()
        .then((data) => {
          setRequestData({
            loading: false,
            refreshing: false,
            error: undefined,
            data
          });
        })
        .catch((error) => {
          setRequestData({ loading: false, refreshing: false, error });
        });
    },
    [queryFunction, setRequestData, cacheData]
  );

  const refreshData = useCallback(() => {
    fetchData(true);
  }, [fetchData]);

  useRefresh({ refreshEventType, onRefresh: refreshData });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { refresh: refreshData, requestData, setData, fetchData };
}
