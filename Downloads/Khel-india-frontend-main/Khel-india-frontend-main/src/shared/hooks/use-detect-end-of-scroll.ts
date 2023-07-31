import { useCallback, useRef } from 'react';

interface UseDetectEndOfScrollArgs {
  action: (nodes: IntersectionObserverEntry[]) => void;
  observeChildFromEnd?: number;
}

export default function useDetectEndOfScroll({
  action,
  observeChildFromEnd = 1
}: UseDetectEndOfScrollArgs): [
  React.MutableRefObject<HTMLElement | null>,
  (el: HTMLElement | null) => void
] {
  const observerRef = useRef<IntersectionObserver>();
  const itemRef = useRef<HTMLElement | null>(null);

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((nodes) => {
        action(nodes);
      });

      if (el) {
        itemRef.current = el;
        const childAsked = el.children.item(
          el.children.length - observeChildFromEnd
        );
        const childToObserve = childAsked ? childAsked : el.lastElementChild;

        childToObserve && observerRef.current.observe(childToObserve);
      }
    },
    [action, observeChildFromEnd]
  );

  return [itemRef, setRef];
}
