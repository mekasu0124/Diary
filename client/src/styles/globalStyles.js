import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Rancho";
    src: url(../../public/fonts/Rancho-Regular.ttf);
  }

  :root {
    --bg: #440028;
    --bg2: #651142;
    --hvr: #D1258A;
    --bdr: #a95486;
    --shadow: #A95486;
    --fg: #CB87AF;
    --txtFont: "Rancho";
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
      145deg,
      var(--bg),
      var(--bg2),
      var(--bg)
    );
  }
`;