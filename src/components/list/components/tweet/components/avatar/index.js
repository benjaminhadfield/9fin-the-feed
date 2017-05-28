import styled from 'styled-components'
import { spacing, borderRadius } from '../../../../../../constants/style'

export default styled.img`
  flex-shrink: 0;
  border-radius: ${borderRadius.sd};
  box-shadow: 0 1px 6px rgba(0, 0, 0, .16);
  object-fit: cover;
  width: 40px;
  height: 40px;
  margin-right: ${spacing.sd}
`
