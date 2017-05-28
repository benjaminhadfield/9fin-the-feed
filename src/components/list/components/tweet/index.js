import React from 'react'
import moment from 'moment'
import { P, Small, A } from '../../../text'
import Container from './components/container'
import Avatar from './components/avatar'
import TweetContainer from './components/tweetContainer'

export default ({ content, avatar, name, profileLink, location, time }) => (
  <Container>
    <Avatar src={avatar} />
    <TweetContainer>
      <Small noMargin>
        <A href={profileLink} rel='nofollow'>{name}</A>
        &nbsp;&middot;&nbsp;
        {location}
        &nbsp;&middot;&nbsp;
        {moment(time).fromNow()}
      </Small>
      <P>{content}</P>
    </TweetContainer>
  </Container>
)
