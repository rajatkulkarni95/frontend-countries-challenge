import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) =>
  `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    
    body {
        font-family: ${theme.font};
        background: ${theme.colors.background};
        color: ${theme.colors.text_color}
    }`}`;
