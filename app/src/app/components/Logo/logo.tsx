import React from 'react';
import LogoSrc from '../../../assets/logo.svg';
import styled from 'styled-components';
import { device } from '../theme/theme';

const Img = styled.img<{ size?: 'sm' | 'lg' }>`
  ${({ size }) => {
    if (size) {
      return `
                height: ${size === 'sm' ? '125' : '150'}px;
                width: ${size === 'sm' ? '125' : '150'}px;
            `;
    }

    return `
            height: 125px;
            width: 125px;

            @media ${device.tablet}{
                height: 150px;
                width: 150px;
            }
        `;
  }}
`;

interface LogoProps {
  size?: 'sm' | 'lg';
}

export const Logo = ({ size }: LogoProps) => {
  return <Img src={LogoSrc} alt="Capitanes logo" size={size} />;
};
