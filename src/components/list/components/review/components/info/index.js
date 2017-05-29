import styled from 'styled-components'
import { fontSize, fontFamily, spacing, colour, borderRadius } from '../../../../../../constants/style'

export default styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  font-family: ${fontFamily.body};
  font-size: ${fontSize.small};
  margin-right: ${spacing.sm};
  padding: 1px ${spacing.sm};
  color: ${colour.darkGrey};
  background: ${colour.lightGrey};
  border-radius: ${borderRadius.sm};
`
