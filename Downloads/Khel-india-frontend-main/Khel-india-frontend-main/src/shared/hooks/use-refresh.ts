import { useEffect } from 'react';

export interface UseRefreshArgs {
  refreshEventType?: string;
  onRefresh: () => void;
}

export default function useRefresh({
  refreshEventType,
  onRefresh
}: UseRefreshArgs): void {
  useEffect(() => {
    const refreshEventHandler = ((e: CustomEvent<{ refreshType: string }>) => {
      const refreshType = e.detail.refreshType;
      if (refreshType === refreshEventType) {
        onRefresh();
      }
    }) as EventListener;

    document.addEventListener('reloadpagedata', refreshEventHandler);

    return () =>
      document.removeEventListener('reloadpagedata', refreshEventHandler);
  }, [refreshEventType, onRefresh]);
}
