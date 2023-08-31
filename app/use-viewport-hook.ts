import { useLayoutEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    //1024px ~
    //768px ~ 1023px
    //0px ~ 767px
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    setIsTablet(window.innerWidth <= 1023 || window.outerWidth <= 1023);
    setIsMobile(window.innerWidth <= 767 || window.outerWidth <= 767);
  }

  useLayoutEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height, isMobile, isTablet, isLoaded }
}