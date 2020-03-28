import React from 'react';
import Feedback from './components/Feedback';
import Image from './components/Image';
import styled, { createGlobalStyle } from 'styled-components';
import bg from './assets/bg.jpg'

/**
 * App structure and some global styles.
 */

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-image: url('${bg}');
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .carousel{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .carousel-dots{
    width: 100%;
    position: absolute;
    bottom: 0;
    li{
      button::before{
        font-size: 30px;
      }
    }
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Feedback />
      <Image />
    </Wrapper>
  );
}

export default App;
