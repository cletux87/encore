import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: sans-serif;
    }
    html,
    body,
    body > div:first-child {
        height: 100%
        padding: 0;
        margin: 0;
    }
    h1, h2, h3, p {
        padding: 0;
        margin: 0;
    },
    body {
        overflow: hidden;
    }
    button {
        cursor: pointer;
    }
`;

export const theme = {
  colors: {
    encoreBlack: '#000',
    encoreWhite: '#FFF',
    encoreLightBlue: '#d2d8e8',
    encoreDarkBlue: '#1D428A',
    encoreBeige: '#F2F2F2',
  },
};

export const breakpoints = {
  mobile: 425,
  tablet: 768,
  laptop: 1440,
  desktop: 2560,
};

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: `${breakpoints.mobile}px`,
  tablet: `${breakpoints.tablet}px`,
  laptop: '1024px',
  laptopL: `${breakpoints.laptop}px`,
  desktop: `${breakpoints.desktop}px`,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
