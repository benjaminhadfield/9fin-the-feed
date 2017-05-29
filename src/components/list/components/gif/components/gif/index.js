import styled from 'styled-components'
import { borderRadius, spacing, colour } from '../../../../../../constants/style'

export default styled.img`
  border-radius: ${borderRadius.sm};
  width: 100%;
  background: ${colour.lightGrey};
  min-height: 300px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .16);
  margin-bottom: ${spacing.sm};
`
