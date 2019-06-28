import React from 'react';
import './App.css';
import { ButtonWrapper } from './components/Button'
import mainBcg from './images/mainBcg.jpg'
import secondaryBcg from './images/secondaryBcg.jpg'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header img={mainBcg} title="Welcome to our coffee shop">
        <ButtonWrapper>Click me!!</ButtonWrapper>
      </Header>
      <Header/>
    </>
  );
}

export default App;
