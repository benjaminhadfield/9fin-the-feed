import React from 'react'
import moment from 'moment'
import { P, A, Small } from '../../../text'
import { StarButton } from '../../../button'
import Separator from '../../../separator'
import Container from './components/container'
import Avatar from './components/avatar'
import Meta from './components/meta'
import TweetContainer from './components/tweetContainer'

export default ({ content, icon, name, profileLink, location, time, isFave, star, loading }) => (
  <Container>
    <Avatar src={icon} />
    <TweetContainer>
      <Meta>
        <Small><A href={profileLink} rel='nofollow'>{name}</A></Small>
        <Separator />
        <Small>{location}</Small>
        <Separator />
        <Small>{moment(time).format('DD MMM')} ({moment(time).fromNow()})</Small>
        <StarButton isFave={isFave} loading={loading} onClick={star} />
      </Meta>
      <P noMargin>{content}</P>
    </TweetContainer>
  </Container>
)
