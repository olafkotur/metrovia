import { motion } from 'framer-motion';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Fade } from '../style/animations';

const TooltipHoverContainer = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 15%);
  min-width: 100px;
  max-width: 200px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.backgroundColor.secondary};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
  z-index: ${(props) => props.theme.zIndex.tooltip};
`;

interface TooltipProps {
  content: string;
  children: ReactElement;
}

export const Tooltip = ({ content, children }: TooltipProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)}>
      {children}
      {isOpen && <TooltipHoverContainer {...Fade({})}>{content}</TooltipHoverContainer>}
    </div>
  );
};
