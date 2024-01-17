import React from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { EncoreLogo } from '../EncoreLogo';
import { device } from '../theme/theme';
import { Snackbar } from '../Snackbar';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 2px 0 20px;
  position: relative;

  // @media ${device.tablet} {
  //   padding: 60px 0 50px;
  // }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;

  @media ${device.tablet} {
    flex-basis: 30%;
  }
`;

const Content = styled.section`
  height: 100%;
  width: 100%;
  flex-basis: 70%;

  @media ${device.tablet} {
    flex-basis: 60%;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;

  @media ${device.tablet} {
    flex-basis: 10%;
  }
`;

interface CommonLayoutProps {
  children?: React.ReactNode;
  ariaLabel?: string;
}

export const CommonLayout = ({ children, ariaLabel }: CommonLayoutProps) => {
  return (
    <RootContainer>
      <Snackbar />
      <Header aria-label="Capitanes Logo info">
        <Logo />
      </Header>
      <Content aria-label={ariaLabel}>{children}</Content>
      <Footer aria-label="Powered by Encore Info">
        <EncoreLogo />
      </Footer>
    </RootContainer>
  );
};
