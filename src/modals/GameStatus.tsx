import React, { ReactElement } from 'react';
import { LargeButton, LargeText, MediumText, SpaceBetweenContainer, Spacer } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useStartGame } from '../hooks/use-start-game';
import { GameStatusState, ModalState, PanelState } from '../state';
import { Theme } from '../theme';
import { GameStatusName, RouteName } from '../typings';

const Container = styled.div`
  width: 400px;
`;

const SingleButton = styled(LargeButton)`
  width: 100%;
`;

const DualButton = styled(LargeButton)`
  width: 190px;
`;

export const GameStatus = (): ReactElement => {
  const status = useRecoilValue(GameStatusState);

  return (
    <Container>
      {status === GameStatusName.SUCCESS && <SuccessContent />}
      {status === GameStatusName.FAILED && <FailedContent />}
      {status === GameStatusName.RESET && <ResetContent />}
      {status === GameStatusName.EXIT && <ExitContent />}
    </Container>
  );
};

const SuccessContent = (): ReactElement => {
  const resetModal = useResetRecoilState(ModalState);
  const resetPanel = useResetRecoilState(PanelState);
  const navigate = useNavigate();

  return (
    <>
      <LargeText>Congratulations</LargeText>
      <Spacer vertical={5} />

      <MediumText>You've guessed all of the stations!</MediumText>

      <Spacer vertical={5} />

      <SingleButton
        bg={Theme.highlightColor.primary}
        onClick={() => {
          navigate(RouteName.SETUP);
          resetModal();
          resetPanel();
        }}
      >
        Continue
      </SingleButton>
    </>
  );
};

const FailedContent = (): ReactElement => {
  const resetModal = useResetRecoilState(ModalState);
  const resetPanel = useResetRecoilState(PanelState);
  const navigate = useNavigate();

  return (
    <>
      <LargeText>Uh oh...</LargeText>
      <Spacer vertical={5} />

      <MediumText>You've ran out of time before you could guess all the stations, better luck next time.</MediumText>

      <Spacer vertical={5} />

      <SingleButton
        bg={Theme.highlightColor.primary}
        onClick={() => {
          navigate(RouteName.SETUP);
          resetModal();
          resetPanel();
        }}
      >
        Continue
      </SingleButton>
    </>
  );
};

const ResetContent = (): ReactElement => {
  const resetModal = useResetRecoilState(ModalState);
  const resetPanel = useResetRecoilState(PanelState);
  const startGame = useStartGame();

  return (
    <>
      <LargeText>Are you sure?</LargeText>
      <Spacer vertical={5} />

      <MediumText>Resetting the game will mean you will lose all progress, do you want to do this?</MediumText>

      <Spacer vertical={5} />

      <SpaceBetweenContainer>
        <DualButton
          bg={Theme.highlightColor.primary}
          onClick={() => {
            startGame();
            resetModal();
            resetPanel();
          }}
        >
          Yes
        </DualButton>
        <DualButton onClick={resetModal}>No</DualButton>
      </SpaceBetweenContainer>
    </>
  );
};

const ExitContent = (): ReactElement => {
  const resetModal = useResetRecoilState(ModalState);
  const resetPanel = useResetRecoilState(PanelState);
  const navigate = useNavigate();

  return (
    <>
      <LargeText>Are you sure?</LargeText>
      <Spacer vertical={5} />

      <MediumText>Exiting the game will mean you will lose all progress, do you want to do this?</MediumText>

      <Spacer vertical={5} />

      <SpaceBetweenContainer>
        <DualButton
          bg={Theme.highlightColor.primary}
          onClick={() => {
            navigate(RouteName.SETUP);
            resetModal();
            resetPanel();
          }}
        >
          Yes
        </DualButton>
        <DualButton onClick={resetModal}>No</DualButton>
      </SpaceBetweenContainer>
    </>
  );
};
