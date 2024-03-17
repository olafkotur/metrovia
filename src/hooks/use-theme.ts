import { useCallback, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeState } from '../state';
import { DARK_THEME, LIGHT_THEME } from '../theme';

export const useTheme = () => {
  const theme = useRecoilValue(ThemeState);

  const Theme = useMemo(() => {
    if (theme === 'dark') {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }, [theme]);

  return Theme;
};

export const useToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);

  return useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);
};
