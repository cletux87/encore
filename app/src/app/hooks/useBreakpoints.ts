import { useEffect, useState } from 'react';
import { breakpoints } from '../components/theme/theme';

interface IWindowSize {
  width: number;
  height: number;
}

export const useBreakpoints = () => {
  const [breakpoint, setBreakPoint] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
  });
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let isMd = false;
    let isLg = false;
    let isXl = false;
    if (windowSize.width >= breakpoints.desktop) {
      isXl = true;
    }
    if (
      breakpoints.laptop < windowSize.width &&
      windowSize.width < breakpoints.desktop
    ) {
      isLg = true;
    }
    if (
      breakpoints.tablet < windowSize.width &&
      windowSize.width < breakpoints.laptop
    ) {
      isMd = true;
    }
    setBreakPoint({
      isXl,
      isMd,
      isLg,
      isSm: true,
    });

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);

  return breakpoint;
};
