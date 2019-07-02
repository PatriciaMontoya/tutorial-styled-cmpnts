import React from 'react';
import './App.css';
import { ButtonWrapper } from './components/Button'
import mainBcg from './images/mainBcg.jpg'
import secondaryBcg from './images/secondaryBcg.jpg'
import Header from './components/Header'
import Banner from './components/Banner'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
      <Header img={mainBcg}>
        <Banner title="Fresh coffee is the best">
            <ButtonWrapper>Click me!!</ButtonWrapper>
        </Banner>
      </Header>
      <Header/>
    </>
  );
}

export default App;
