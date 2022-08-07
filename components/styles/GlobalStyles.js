import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
:root {
  //
  // Form Variables
  //
  --inputBackground: #fff;
  --inputBorder: #000;
  --inputText: #000;
  --buttonBackground:#000;
  --buttonText:#fff;
  --buttonHover:#e40c5d;
}
html {
  box-sizing: border-box;
  font-size:10px;
  margin:0;
  padding:0;
  font-family: 'Outfit', sans-serif;
  overflow-x: hidden;
  button {
    cursor: pointer;
  }
  p, div, body, ul, li, input, img, fieldset, h1 {
    margin:0;
    padding:0;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration:none;
    color:black;
    &:hover {
      text-decoration: underline;
    }
  }
  input:focus, select:focus {
    outline:none;
  }
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding:0;
  margin:0;
  min-height:100vh!important;
  font-size:clamp(1.3rem, 2vw, 1.5rem);
  background: rgb(247,20,95);
background: linear-gradient(180deg, rgba(247,20,95,1) 0%, rgba(255,255,255,1) 100%);
}
`;
