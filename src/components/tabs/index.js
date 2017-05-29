import React from 'react'
import Container from './components/container'
import Tab from './components/tab'
import TabContainer from './components/tabContainer'
import Panel from './components/panel'
import { colour, boxShadow } from '../../constants/style'

export default class Tabs extends React.Component {
  render () {
    const { tabs, children } = this.props
    return (
      <Container>
        <TabContainer>
          {
            tabs.map((tab, i) =>
              <Tab
                exact
                activeStyle={{pointerEvents: 'none', color: 'white', background: colour.blue, boxShadow: boxShadow.sd, borderColor: 'royalblue'}}
                children={tab.label}
                to={tab.to}
                key={tab.to} />
            )
          }
        </TabContainer>
        <Panel children={children} />
      </Container>
    )
  }
}
