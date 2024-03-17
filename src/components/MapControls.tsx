import React, { ReactElement } from 'react';
import { ColumnContainer, Icon, IconButton, IconName, Spacer } from 'react-otio';
import { useTheme } from '../hooks/use-theme';

export const MapControls = ({
  onZoomIn,
  onZoomOut,
  onZoomReset,
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}): ReactElement => {
  const theme = useTheme();

  return (
    <ColumnContainer>
      <IconButton size={28} onClick={onZoomIn} bg={theme.backgroundColor.secondary}>
        <Icon name={IconName.PLUS} size={22} />
      </IconButton>

      <Spacer vertical={3} />

      <IconButton size={28} onClick={onZoomReset} bg={theme.backgroundColor.secondary}>
        <Icon name={IconName.ROTATE_RIGHT} size={22} />
      </IconButton>

      <Spacer vertical={3} />

      <IconButton size={28} onClick={onZoomOut} bg={theme.backgroundColor.secondary}>
        <Icon name={IconName.MINUS} size={22} />
      </IconButton>
    </ColumnContainer>
  );
};
