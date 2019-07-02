import React from 'react'
import { InputBasic, InputEmail, InputAwesome } from './components/Inputs'


class App extends React.Component {

  render() {
    return (
      <div>
        <InputBasic />
        <InputEmail />
        <InputAwesome type="password"/>
      </div>
    );
  }
}

export default App;
