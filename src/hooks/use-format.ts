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
