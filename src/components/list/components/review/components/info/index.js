import styled from 'styled-components'
import { fontSize, fontFamily, spacing, colour, borderRadius } from '../../../../../../constants/style'

export default styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: ${spacing.sm};
  padding: 0px 5px;
  border: 1px solid ${colour.blue};
  font-family: ${fontFamily.heading};
  font-size: ${fontSize.small};
  color: ${colour.blue};
  border-radius: ${borderRadius.sm};
  align-self: stretch;
`
