import React from 'react'
import { Heading2 } from '../../../text'
import Container from './components/container'
import Column from './components/column'
import Meta from './components/meta'
import Avatar from './components/avatar'
import Info from './components/info'

export default ({name, icon, rating, price, ...props}) => (
  <Container>
    <Avatar src={icon} />
    <Column>
      <Heading2>{name}</Heading2>
      <Meta>
        <Info>{rating}&nbsp;<span aria-label='star' role='img'>⭐️</span></Info>
        <Info>{price}</Info>
      </Meta>
    </Column>
  </Container>
)
