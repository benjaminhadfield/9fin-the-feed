import React from 'react'
import { P, A } from '../../../text'
import Container from './components/container'
import Gif from './components/gif'

export default ({src, href, ...props}) => {
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
    </Container>
  )
}
