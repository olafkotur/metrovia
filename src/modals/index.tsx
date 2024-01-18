import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useOnKeyPress } from '../hooks';
import { ModalState } from '../state';
import { Fade } from '../style/animations';
import { ModalName } from '../typings';
import { GameStatus } from './GameStatus';

const ModalContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => props.theme.zIndex.modal - 1};
`;

const ModalBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background: ${(props) => props.theme.backgroundColor.backdrop};
  z-index: ${(props) => props.theme.zIndex.backdrop};
`;

const ModalContent = styled.div`
  position: absolute;
  z-index: ${(props) => props.theme.zIndex.modal};
  border-radius: ${(props) => props.theme.borderRadius.large};
  filter: drop-shadow(${(props) => props.theme.dropShadow.strong});
  padding: ${(props) => props.theme.spacing.veryLarge};
  background: ${(props) => props.theme.backgroundColor.primary};
`;

export const Modals = (): ReactElement => {
  const modal = useRecoilValue(ModalState);
  const resetModal = useResetRecoilState(ModalState);

  useOnKeyPress({ key: 'Escape', onPress: resetModal });

  if (modal == null) {
    return <></>;
  }

  return (
    <ModalContainer {...Fade({})} transition={{ duration: 0.1 }}>
      <ModalBackdrop onClick={resetModal} />
      <ModalContent>{modal === ModalName.GAME_STATUS && <GameStatus />}</ModalContent>
    </ModalContainer>
  );
};
