import React from 'react';
import styled from 'styled-components';
import { Text } from '../Typography';

const StyledButton = styled.button`
  padding: 12px 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  letter-spacing: 0.32px;
  border: none;
  background-color: ${(props) => props.theme.colors.encoreDarkBlue};
  color: ${(props) => props.theme.colors.encoreWhite};

  &:disabled {
    opacity: 0.5;
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children: string | React.ReactNode;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <Text>{children}</Text>
    </StyledButton>
  );
};
