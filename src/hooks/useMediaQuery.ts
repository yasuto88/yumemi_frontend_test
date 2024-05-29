import { useEffect, useState } from 'react';

export const mediaQuery = {
  sp: 'max-width: 751px',
  tablet: '(min-width: 752px) and (max-width: 1121px)',
  pc: 'min-width: 1122px',
};

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState<boolean>(
    matchMedia(formattedQuery).matches,
  );

  useEffect(() => {
    const mql = matchMedia(formattedQuery);

    if (mql.media === 'not all' || mql.media === 'invalid') {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setMatch(e.matches);
    };

    mql.addEventListener('change', handleChange);

    return () => {
      mql.removeEventListener('change', handleChange);
    };
  }, [formattedQuery]);

  return match;
};
