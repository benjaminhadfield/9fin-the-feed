import React from 'react'
import Container from './components/container'
import Tab from './components/tab'
import TabContainer from './components/tabContainer'
import Panel from './components/panel'

export default class Tabs extends React.Component {
  render () {
    const { tabs, activeTab, children } = this.props
    return (
      <Container>
        <TabContainer>
          {
            tabs.map((tab, i) => <Tab active={activeTab === i} children={tab} key={i} />)
          }
        </TabContainer>
        <Panel children={children} />
      </Container>
    )
  }
}
