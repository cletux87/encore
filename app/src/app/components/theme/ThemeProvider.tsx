import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import React from 'react';
import { theme } from './theme';
import { GlobalStyle } from './theme';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
