import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from './useScrollReveal';

export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollReveal();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return [ref, count];
}
