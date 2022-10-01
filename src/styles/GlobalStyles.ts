import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  *::-webkit-scrollbar {
    width: 0.5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }
  
  *::-webkit-scrollbar-thumb {
    background: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`; 