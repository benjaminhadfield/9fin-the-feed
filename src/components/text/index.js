import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'
import { fontFamily, fontSize, colour, spacing } from '../../constants/style'

const _ = styled.div`
  margin: ${props => props.noMargin ? 0 : `0 0 ${spacing.sd}`};
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
`

export const Small = _.withComponent('small').extend`
  font-family: ${fontFamily.small};
  color: ${colour.darkGrey}
`

export const A = _.withComponent('a').extend`
  color: ${colour.blue};
  text-decoration: none;
  &:hover {
    color: ${colour.blueHover};
  }
`

export const Link = _.withComponent(_Link).extend`
  color: ${colour.blue};
  text-decoration: none;
  &:hover {
    color: ${colour.blueHover};
  }
`
