import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 17px;
    font-weight: 400;
    color: ${(props) => props.theme.colorWhiteForText};
    background-color: ${(props) => props.theme.colorForDarkBackground};
  }
`;

// .page {
//   width: 100%;
//   min-height: 100vh;
//   background-color: var(--color-main);
//   color: var(--color-second);

//   display: flex;
//   flex-direction: column;

//   font-family: 'Inter', sans-serif;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 17px;
// }