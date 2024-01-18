import dayjs from 'dayjs';
import { useCallback } from 'react';

export const useFormatPercent = () => {
  return useCallback((value: number) => {
    let val = value;
    if (value >= 1) {
      val = value - 1;
    }
    return `${Math.floor(val * 100)}%`;
  }, []);
};

export const useFormatDate = (format = 'DD/MM/YYYY') => {
  return useCallback(
    (value: Date) => {
      return dayjs(value).format(format);
    },
    [format],
  );
};

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
