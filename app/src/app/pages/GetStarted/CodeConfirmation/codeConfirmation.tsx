import { Header, Text } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { InputText } from '../../../components/InputText';
import { hasEmailCorrectFormat } from './helper';
import SnackbarService from '../../../services/Snackbar/SnackbarService';
import { ResendButton } from '../ResendButton';

const RootContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MotionContainer = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translateY(100px);
  ${({ isClicked }) =>
    isClicked ? 'animation: onEnter 0.5s ease-in-out both;' : ''}
  @keyframes onEnter {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const MutateFirst = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isClicked }) =>
    isClicked ? 'animation: onEnterFade 0.25s ease-in-out both;' : ''}
  @keyframes onEnterFade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const MutateSecond = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  gap: 10px;
  ${({ isClicked }) =>
    isClicked ? 'animation: onEnterAppear 0.5s ease-in-out both;' : ''}
  @keyframes onEnterAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MailInput = styled(InputText)`
  margin-top: 10px;
`;

const AbsoluteContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`;

const EnterButtonContainer = styled.div`
  margin-top: 200px;
`;

const EnterCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ReceiveCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

interface CodeConfirmationProps {
  onCodeConfirmed: (email: string) => void;
}

export const CodeConfirmation = ({
  onCodeConfirmed,
}: CodeConfirmationProps) => {
  const [isEnterClicked, setIsEnterClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [hasCodeSent, setHasCodeSent] = useState(false);
  const [code, setCode] = useState('');

  const handleClickOnEnter = () => {
    setIsEnterClicked((prevValue) => !prevValue);
  };

  const onChangeEmail = (newValue: string) => {
    setEmail(newValue);
    setIsEmailCorrect(hasEmailCorrectFormat(newValue));
  };

  const handleSendCode = () => {
    SnackbarService.notify({
      title: 'Success',
      content: 'Code Send!',
      severity: 'success',
      duration: 2000,
    });
    setHasCodeSent(true);
  };

  const handleBackButton = () => {
    setHasCodeSent(false);
  };

  const handleCodeChange = (newValue: string) => {
    setCode(newValue);
  };

  const handleResendCode = () => {
    setHasCodeSent(true);
    setCode('');
    SnackbarService.notify({
      title: 'Success',
      content: 'Code Send!',
      severity: 'success',
      duration: 2000,
    });
  };

  const buttonConfig = (() => {
    if (!hasCodeSent) {
      return { label: 'send', action: handleSendCode };
    }

    if (hasCodeSent && code) {
      return { label: 'continue', action: () => onCodeConfirmed(email) };
    }

    return { label: 'back', action: handleBackButton };
  })();

  return (
    <RootContainer>
      <MotionContainer isClicked={isEnterClicked}>
        <AbsoluteContainer>
          <MutateSecond isClicked={isEnterClicked}>
            <Header>What's your email address?</Header>
            <Text>We'll send you a verification code via email.</Text>
            <MailInput
              placeholder="hello@me.com"
              value={email}
              onChange={onChangeEmail}
            />
            {hasCodeSent && (
              <>
                <EnterCodeContainer>
                  <Header>Please enter your code.</Header>
                  <Text>
                    Enter the six-digit code you just receive via email
                  </Text>
                  <InputText
                    placeholder="XXXXXX"
                    value={code}
                    onChange={handleCodeChange}
                    type="password"
                  />
                </EnterCodeContainer>
                <ReceiveCodeContainer>
                  <Text>Did't receive a code?</Text>
                  <ResendButton onClick={handleResendCode} />
                </ReceiveCodeContainer>
              </>
            )}
            {isEnterClicked && (
              <Button disabled={!isEmailCorrect} onClick={buttonConfig.action}>
                {buttonConfig.label}
              </Button>
            )}
          </MutateSecond>
        </AbsoluteContainer>
        <MutateFirst isClicked={isEnterClicked}>
          <Header>Win an autographed basketball!</Header>
          <Text>Get started by verifying your email.</Text>
          <Text>Press enter below to begin.</Text>
        </MutateFirst>
        {!isEnterClicked && (
          <EnterButtonContainer>
            <Button onClick={handleClickOnEnter}>enter</Button>
          </EnterButtonContainer>
        )}
      </MotionContainer>
    </RootContainer>
  );
};
