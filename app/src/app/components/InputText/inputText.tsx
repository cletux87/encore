import React, { useRef } from 'react';
import styled from 'styled-components';
import { device } from '../theme/theme';
import { textStyles } from '../Typography';

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.encoreBeige};
  border: none;
  padding: 20px 0px;
  width: 100%;

  &[type='text'] {
    text-align: center;
    ${textStyles}
  }

  &[type='password'] {
    text-align: center;
    ${textStyles}
  }

  &[type='date'] {
    ${textStyles}
    -webkit-box-align: center !important;
    cursor: pointer;
  }

  &[type='date']::-webkit-inner-spin-button,
  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1);
    display: none;
    -webkit-appearance: none;
  }

  @media ${device.tablet} {
    padding: 20px 0px 17px;
  }
`;

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onChange?: (newVal: string) => void;
  type?: 'password' | 'text' | 'date';
}

export const InputText = ({
  value,
  placeholder,
  onChange,
  type = 'text',
}: InputTextProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const showDatePicker = () => {
    if (type === 'date' && ref.current) {
      ref.current.showPicker();
    }
  };

  return (
    <StyledInput
      ref={ref}
      onClick={showDatePicker}
      onFocus={showDatePicker}
      value={value}
      placeholder={placeholder}
      onChange={(e) => (onChange ? onChange(e.target.value) : undefined)}
      type={type}
    />
  );
};
