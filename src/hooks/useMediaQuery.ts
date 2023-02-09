import { useState, useEffect } from 'react';

export const useMediaQuery = (queryValue: string): { match: boolean } => {
  const mediaQuery = window.matchMedia(queryValue);
  const [match, setMatch] = useState(mediaQuery.matches);
  useEffect(() => {
    const eventHandler = (e: MediaQueryListEvent) => {
      setMatch(e.matches);
    };
    mediaQuery.addEventListener('change', eventHandler);

    return () => {
      mediaQuery.removeEventListener('change', eventHandler);
    };
  }, []);

  return { match };
};
