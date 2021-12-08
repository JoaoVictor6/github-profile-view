import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      scroll-behavior: smooth;
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * > input {
    caret-color: transparent;
    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
`;
