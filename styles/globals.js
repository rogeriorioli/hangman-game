import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Coming Soon', cursive;
    background-image: url('/images/bg.jpg');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height 100vh;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  .page-title {
    width: 100;;
    display: flex;
    justify-content: center;
  }

`;
export default Global;
