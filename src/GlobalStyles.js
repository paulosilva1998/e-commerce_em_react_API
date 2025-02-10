import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #f8f9fa;
    color: #343a40;
    margin: 0px;
    padding: 0px;
  }

  h1, h2, h3 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default GlobalStyles;