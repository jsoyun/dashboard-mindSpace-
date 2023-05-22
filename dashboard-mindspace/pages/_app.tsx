import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
//레드 934A5F
//블루 57648C
//연보라 C2B4D6
//회색 E5E5E5

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // background-color: #57648C;
    background-color: #E6E7E8;


    font-family: 'Arial', sans-serif;
    
  }

  html, body, #__next {
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: '#000000',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
