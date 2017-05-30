import React from 'react'
import Container from './components/container'
import Light from './components/light'
import Label from './components/label'

export default ({websocketLoading, websocketConnected}) => (
  <Container>
    <Light websocketLoading={websocketLoading} websocketConnected={websocketConnected} />
    <Label>
      { websocketLoading
          ? 'connecting...'
          : websocketConnected
            ? 'connected'
            : 'offline' }
    </Label>
  </Container>
)
