import { useEffect, useRef } from 'react';

const useDoOnMount = (fn: () => void) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      fn();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useDoOnMount;
