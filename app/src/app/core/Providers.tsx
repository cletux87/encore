import React from 'react';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { AuthUserProvider } from '../context/UserContext';

interface ProvidersProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthUserProvider>{children}</AuthUserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
