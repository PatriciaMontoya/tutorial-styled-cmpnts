import React from 'react'
import { MainBanner, SecondBanner } from './components/Media'

class App extends React.Component {

  render() {
    return (
      <div>
        <MainBanner background="pink">MainBanner</MainBanner>
        <SecondBanner />
      </div>
    );
  }
}

export default App;
