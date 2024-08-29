import { createGlobalStyle } from 'styled-components';
import { font } from './Common';

export const GlobalStyles = createGlobalStyle`
*,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scroll.trackDefault};
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to top,
    ${props => props.theme.colors.scroll.thumbDefaultSecondary},
    ${props => props.theme.colors.scroll.thumbDefaultAccent});
    border-radius: 5px;
  }

  h1 {
    ${font({
			weight: 700,
			Fmin: 30,
			Fmax: 55,
		})}
  }

  p {
    ${font({
			weight: 400,
			Fmin: 15,
			Fmax: 35,
		})}
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    ${font({
			weight: 700,
			Fmin: 15,
			Fmax: 25,
		})};
    color: ${props => props.theme.colors.text.dark};
  }

  body {
    background-color: ${props => props.theme.colors.grey.light};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: none;
    ${font({ Fmin: 15, Fmax: 20 })};
    color: ${props => props.theme.colors.text.dark};
  }
`;
