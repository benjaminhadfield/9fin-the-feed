import React from 'react'
import moment from 'moment'
import { P, A } from '../../../text'
import Container from './components/container'
import Avatar from './components/avatar'
import Meta from './components/meta'
import TweetContainer from './components/tweetContainer'
import Middot from './components/middot'

export default ({ content, avatar, name, profileLink, location, time }) => (
  <Container>
    <Avatar src={avatar} />
    <TweetContainer>
      <Meta noMargin>
        <A href={profileLink} rel='nofollow'>{name}</A>
        <Middot />
        {location}
        <Middot />
        {moment(time).format('DD MMM')} ({moment(time).fromNow()})
      </Meta>
      <P noMargin>{content}</P>
    </TweetContainer>
  </Container>
)
