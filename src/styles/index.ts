import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import resetStyles from './reset';

import { GlobalStyleTheme } from "./types";

const GlobalStyle = createGlobalStyle<{ theme: GlobalStyleTheme }>`
  ${resetStyles}
  ${normalize}
  
  body {
  }
`;

export default GlobalStyle;
