import React from 'react'
import { Heading2 } from '../../../text'
import { StarButton } from '../../../button'
import Container from './components/container'
import Column from './components/column'
import Meta from './components/meta'
import Avatar from './components/avatar'
import Info from './components/info'

export default ({name, icon, rating, price, categories, phone, star, isFave, loading, ...props}) => (
  <Container>
    <Avatar src={icon} />
    <Column>
      <Heading2>
        <StarButton loading={loading} isFave={isFave} onClick={star} />
        {' '}{name}
      </Heading2>
      <Meta>
        { categories.map(category => <Info key={category.alias}>{category.title}</Info>) }
      </Meta>
    </Column>
  </Container>
)
