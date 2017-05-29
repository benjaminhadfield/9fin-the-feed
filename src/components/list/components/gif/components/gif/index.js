import styled from 'styled-components'
import { borderRadius, boxShadow, spacing, colour } from '../../../../../../constants/style'

export default styled.img`
  border-radius: ${borderRadius.sm};
  width: 100%;
  background: ${colour.lightGrey};
  min-height: 300px;
  box-shadow: ${boxShadow.sd};
  margin-bottom: ${spacing.sm};
`
