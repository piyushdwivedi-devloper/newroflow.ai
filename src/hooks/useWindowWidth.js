import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => {
      setWidth(window.innerWidth);
    });
    resizeObserver.observe(document.documentElement);
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return width;
}
