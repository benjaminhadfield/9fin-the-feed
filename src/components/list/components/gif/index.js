import React from 'react'
import { P, A } from '../../../text'
import Container from './components/container'
import Gif from './components/gif'
import { StarButton } from '../../../button'

export default ({src, href, star, loading, isFave, ...props}) => {
  const a = document.createElement('a')
  a.href = href
  return (
    <Container>
      <Gif src={src} />
      {
        href
          ? <P>From <A rel='nofollow' href={href}>{a.hostname}</A>.</P>
          : <P>No source :'(</P>
      }
      <StarButton loading={loading} isFave={isFave} onClick={star} />
    </Container>
  )
}
