import { IconDefinition, IconProp, library } from '@fortawesome/fontawesome-svg-core';
import * as Regular from '@fortawesome/free-regular-svg-icons';
import * as Solid from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HTMLMotionProps, motion } from 'framer-motion';
import { camelCase } from 'lodash';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DEFAULT_ICON_OPACITY, DEFAULT_ICON_SIZE } from '../const';
import { DEFAULT_THEME } from '../style/theme';
import { IconName } from '../typings';

// iterate through all icons and add them to the library
Object.values(IconName).forEach((icon) => {
  const [prefix, iconName] = icon.split(' ');
  if (prefix === 'fa-solid') {
    library.add(Solid[camelCase(iconName) as keyof typeof Solid] as IconDefinition);
  } else if (prefix === 'fa-regular') {
    library.add(Regular[camelCase(iconName) as keyof typeof Regular] as IconDefinition);
  }
});

const IconContainer = styled(motion.div)<{ size: number; color: string; opacity: number }>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  opacity: ${(props) => props.opacity};
`;

export const Icon = ({
  name,
  color,
  size,
  opacity,
  animation,
}: {
  name: IconName;
  color?: string;
  size?: number;
  opacity?: number;
  animation?: HTMLMotionProps<'div'>;
}): ReactElement => {
  return (
    <IconContainer
      {...animation}
      color={color ?? DEFAULT_THEME.color.normal}
      size={size ?? DEFAULT_ICON_SIZE}
      opacity={opacity ?? DEFAULT_ICON_OPACITY}
    >
      <FontAwesomeIcon icon={name as unknown as IconProp} />
    </IconContainer>
  );
};
