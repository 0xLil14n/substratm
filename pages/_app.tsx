import '../styles/globals.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

// defaults to lilian's moralis App ID and server URL
// TODO: configure the defaults in the nginx config and/or if we move to nextjs, in vercel
const APP_ID =
  (process.env.REACT_APP_MORALIS_APP_ID as string) ??
  'DBofksEwejwcrHGi5N32hSsPKniOy46jV4aeIIOO';
const SERVER_URL =
  (process.env.REACT_APP_MORALIS_SERVER_URL as string) ??
  'https://ww8ofdl0e4tg.usemoralis.com:2053/server';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    color: #FFFFFF;
    background-color: #000000;
    font-family: 'Sen', sans-serif;
  }
`;

const PURPLE = '#5221E6';
const LEVEL_1 = '#181823';
const LIGHT_GREY = '#DEECF9';
const theme = {
  primary: PURPLE,
  secondary: LIGHT_GREY,

  background: {
    default: '#000000',
    paper: PURPLE,
  },
  colors: {
    primary: PURPLE,
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    text: '#FFFFFF',
    darkGrey: '#C7E0F4',
    lightGrey: LIGHT_GREY,
    purple: PURPLE,
    levelOne: LEVEL_1,
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export default MyApp;
