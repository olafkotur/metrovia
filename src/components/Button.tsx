import { HTMLMotionProps, motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ScaleOnTap } from '../style/animations';

interface ButtonProps extends HTMLMotionProps<'div'> {
  disabled?: boolean;
  bg?: string;
  size?: number;
  width?: string;
}

const ButtonContainer = styled(motion.div)<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
  cursor: pointer;
`;

export const Button = ({ ...props }: ButtonProps): ReactElement => {
  return <ButtonContainer {...props} {...ScaleOnTap({ depth: 0.95 })} />;
};

const IconButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  justify-content: center;
  background: ${(props) => props.bg ?? ''};
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.small};
  width: ${(props) => `${props.size}px` ?? 'auto'};

  &:hover {
    background: ${(props) => props.theme.backgroundColor.selected};
  }
`;

export const IconButton = ({ ...props }: ButtonProps): ReactElement => {
  return <IconButtonContainer {...props}>{props.children}</IconButtonContainer>;
};

const FilledIconButtonContainer = styled(IconButton)<{ bg?: string; size?: number }>`
  width: ${(props) => props.size ?? 25}px;
  height: ${(props) => props.size ?? 25}px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.secondary};
`;

export const FilledIconButton = ({ ...props }: ButtonProps): ReactElement => {
  return <FilledIconButtonContainer {...props}>{props.children}</FilledIconButtonContainer>;
};

const LargeButtonContainer = styled(Button)<{ bg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 250px;
  margin: ${(props) => props.theme.spacing.medium} 0;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.faint};
`;

export const LargeButton = ({ ...props }: ButtonProps): ReactElement => {
  return <LargeButtonContainer {...props}>{props.children}</LargeButtonContainer>;
};
