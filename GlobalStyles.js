/**
 * Absolute imports
 */
import { createGlobalStyle } from 'styled-components';

/**
 * Theme
 */
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, 
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  html {
    font-family: "FS Emeric Book", Verdana, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${theme.colors.typography.main};
    font-size: 16px;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
