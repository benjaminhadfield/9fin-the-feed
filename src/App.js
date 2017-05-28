import React from 'react'
// import logo from './logo.svg'
import Header from './components/header'
import Tabs from './components/tabs'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Tabs activeTab={0} tabs={['Updates', 'Reviews', 'Cats!']} children={'foo'} />
      </div>
    )
  }
}

export default App
