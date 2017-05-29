import React from 'react'
import moment from 'moment'
import { P, A } from '../../../text'
import Separator from '../../../separator'
import Container from './components/container'
import Avatar from './components/avatar'
import Meta from './components/meta'
import TweetContainer from './components/tweetContainer'

export default ({ content, icon, name, profileLink, location, time }) => (
  <Container>
    <Avatar src={icon} />
    <TweetContainer>
      <Meta noMargin>
        <A href={profileLink} rel='nofollow'>{name}</A>
        <Separator />
        {location}
        <Separator />
        {moment(time).format('DD MMM')} ({moment(time).fromNow()})
      </Meta>
      <P noMargin>{content}</P>
    </TweetContainer>
  </Container>
)
