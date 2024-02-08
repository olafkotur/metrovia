import { useCallback } from 'react';

export const useFormatRemainingTime = () => {
  return useCallback((counter: number) => {
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    const formattedCounter =
      new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(minutes) +
      ':' +
      new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(seconds);

    return formattedCounter;
  }, []);
};
