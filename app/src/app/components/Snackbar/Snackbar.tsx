import { useEffect, useState } from 'react';
import SnackbarService from '../../services/Snackbar/SnackbarService';
import styled from 'styled-components';
import { Text } from '../Typography';

export type Severity = 'success' | 'error' | 'warning' | 'info' | 'default';

const RootContainer = styled.div<{ isopen: boolean }>`
  display: flex;
  flex-display: column;
  position: absolute;
  opacity: 0;
  bottom: 100px;
  left: 20px;
  ${({ isopen }) => (isopen ? 'animation: slideIn 0.5s ease-in-out both;' : '')}

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const CardContainer = styled.div<{ iserror: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 10px;
  padding-left: 20px;
  background: linear-gradient(
    90deg,
    ${({ iserror }) => (iserror ? 'red' : 'green')} 10%,
    white 10%,
    white
  );
`;

export const Snackbar = () => {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleSnackbarChange = () => {
      setOpen(SnackbarService.isOpen);
      setIsError(SnackbarService.severity === 'error');
    };

    SnackbarService.subscribe(handleSnackbarChange);

    return () => {
      SnackbarService.unsubscribe(handleSnackbarChange);
    };
  }, []);

  return (
    <RootContainer isopen={open}>
      <CardContainer iserror={isError}>
        <Text>
          <strong>{SnackbarService.title}</strong>
        </Text>
        <Text>{SnackbarService.content}</Text>
      </CardContainer>
    </RootContainer>
  );
};
