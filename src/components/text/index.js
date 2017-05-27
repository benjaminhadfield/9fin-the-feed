import styled from 'styled-components'
import { fontFamily, fontSize, colour, spacing } from '../../constants/style'

const _ = styled.div`
  margin: 0 0 ${spacing.sd};
  padding: 0;
`

export const Title = _.withComponent('h1').extend`
  font-family: ${fontFamily.heading};
  font-size: ${fontSize.title};
  color: ${colour.black};
`

export const Heading1 = _.withComponent('h2').extend`
  font-family: ${fontFamily.heading};
  font-size: ${fontSize.h1};
  color: ${colour.black};
`

export const Heading2 = _.withComponent('h3').extend`
  font-family: ${fontFamily.heading};
  font-size: ${fontSize.h2};
  color: ${colour.black};
`

export const P = _.withComponent('p').extend`
  font-family: ${fontFamily.body};
  font-size: ${fontSize.body};
  font-size: ${fontSize.body};
`
