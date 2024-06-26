import { useEffect, useState } from 'react';

export function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    }

    if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, delayTime) as unknown as number;
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}
