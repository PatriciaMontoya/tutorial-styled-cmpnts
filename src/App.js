import React from 'react';
import './App.css';
import Heading from './components/Heading'
import { ButtonWrapper } from './components/Button'


function App() {
  return (
    <div>
      <ButtonWrapper color="#f15025" big>App.js</ButtonWrapper>
      <Heading />
    </div>
  );
}

export default App;
