import styled from 'styled-components'
import { spacing, borderRadius, boxShadow } from '../../../../../../constants/style'

export default styled.img`
  flex-shrink: 0;
  border-radius: ${borderRadius.sd};
  box-shadow: ${boxShadow.sd};
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-right: ${spacing.sd}
`
