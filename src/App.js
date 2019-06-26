import React from 'react';
import './App.css';
import Heading from './components/Heading'

function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>I'm inline style</h1>
      <h2 className="second">I'm App css style</h2>
      <h3 className="property">I'm from css variables</h3>
      <Heading />
    </div>
  );
}

export default App;
