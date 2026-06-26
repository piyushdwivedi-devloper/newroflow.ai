import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      setIsPointer(window.getComputedStyle(e.target).cursor === 'pointer');
    };
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden="true"
    >
      <div
        className={`absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl transition-transform duration-300 ease-out will-change-transform ${isPointer ? 'scale-150 bg-primary/20' : 'scale-100'}`}
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
