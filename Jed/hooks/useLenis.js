import { useEffect } from 'react';

export const useLenis = () => {
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    });
  }, []);
};
