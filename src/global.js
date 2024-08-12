import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

console.log(
  "%cIf you've come this far in my portfolio, it might mean you have an opportunity for me.",
  "color: white;font-weight:600;padding:10px;font-size:1rem;"
);

console.log(
  "%cHire Me !",
  "color: #abc4ff;font-weight:600;padding:10px;font-size:1rem;"
);
