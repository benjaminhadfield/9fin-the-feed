import styled from 'styled-components'
import { fontSize, fontFamily, colour, spacing } from '../../../../constants/style'

export default styled.small`
  font-family: ${fontFamily.body};
  font-size: ${fontSize.small};
  color: ${colour.black};
  margin: 0 0 0 ${spacing.sm};
  opacity: .6;
`
