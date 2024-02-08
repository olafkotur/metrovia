import React, { ReactElement } from 'react';
import { ColumnContainer, Icon, IconButton, IconName, Spacer } from 'react-otio';
import { Theme } from '../theme';

export const MapControls = ({
  onZoomIn,
  onZoomOut,
  onZoomReset,
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}): ReactElement => {
  return (
    <ColumnContainer>
      <IconButton size={28} onClick={onZoomIn} bg={Theme.backgroundColor.secondary}>
        <Icon name={IconName.PLUS} size={22} />
      </IconButton>

      <Spacer vertical={3} />

      <IconButton size={28} onClick={onZoomReset} bg={Theme.backgroundColor.secondary}>
        <Icon name={IconName.ROTATE_RIGHT} size={22} />
      </IconButton>

      <Spacer vertical={3} />

      <IconButton size={28} onClick={onZoomOut} bg={Theme.backgroundColor.secondary}>
        <Icon name={IconName.MINUS} size={22} />
      </IconButton>
    </ColumnContainer>
  );
};
