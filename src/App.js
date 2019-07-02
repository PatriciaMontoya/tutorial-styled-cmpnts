import React from 'react'
import { DangerButton, SuccessButton } from './components/Buttons'
import Form from './components/Form'
import { ThemeProvider } from 'styled-components'
import { GreenTheme, RedTheme } from './components/Themes'

class App extends React.Component {
  state = {
    theme: RedTheme
  }

  setRedTheme = () => {
    this.setState({
      theme: RedTheme
    })
  }
  
  setGreenTheme = () => {
    this.setState({
      theme: GreenTheme
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <DangerButton onClick={this.setRedTheme}>Danger</DangerButton>
          <SuccessButton onClick={this.setGreenTheme}>Success</SuccessButton>
          <Form></Form>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
