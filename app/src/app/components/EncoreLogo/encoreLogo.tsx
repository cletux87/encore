import React from 'react';
import LogoSrc from '../../../assets/encore-logo.svg';
import styled from 'styled-components';

const Img = styled.img<{ size?: 'sm' | 'lg' }>`
  height: 54px;
  width: 162px;
`;

export const EncoreLogo = () => {
  return <Img src={LogoSrc} alt="Powered by Encore logo" />;
};
