import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import DancingScriptMedium from '../fonts/Dancing_Script/DancingScript-Medium.ttf';
import LatoRegular from '../fonts/Lato/Lato-Regular.ttf';
import ExoBold from '../fonts/Exo/Exo2-Bold.ttf';
import NunitoRegular from '../fonts/Nunito/Nunito-Regular.ttf';
import MontserratSemiBold from '../fonts/Montserrat/Montserrat-SemiBold.ttf';
import PlayfairDisplayRegular from '../fonts/Playfair_Display/PlayfairDisplay-Regular.ttf';


export const variables = {
  colors: {
    bgc: '#F8F8F8',
    primary: '#3E85F3',
    title: '#FF6347',
    subtitle: '#2980b9',
    text: '#333333',
    btn: '#FF4D4D',
    white: '#ffffff',
    opacity: 'rgba(0,0,0,0)',
  },

  fonts: {
    title: 'ExoBold',
    subtitle: 'MontserratSemiBold',
    text: 'NunitoRegular',
    primaryText: 'PlayfairDisplayRegular',
  },

  transitions: {
    standart: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadow: { shadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px' },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};

export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'PlayfairDisplayRegular';
        src: url(${PlayfairDisplayRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

@font-face {
        font-family: 'MontserratSemiBold';
        src: url(${MontserratSemiBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

@font-face {
        font-family: 'NunitoRegular';
        src: url(${NunitoRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

@font-face {
        font-family: 'ExoBold';
        src: url(${ExoBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

@font-face {
        font-family: 'DancingScriptMedium';
        src: url(${DancingScriptMedium}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

@font-face {
        font-family: 'LatoMedium';
        src: url(${LatoRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
}

body{
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  line-height: normal;
  outline: none;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
  font-weight: normal;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input {
  padding: 0;
  margin: 0;
}
`;