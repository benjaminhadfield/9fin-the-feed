import styled from 'styled-components'
import { colour, spacing } from '../../../../constants/style'

export default styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.active ? colour.blue : 'white'};
  color: ${props => props.active ? 'white' : 'initial'};
  border: 1px solid ${colour.lightGrey};
  cursor: ${props => props.active ? 'default' : 'pointer'};
  pointer-events: ${props => props.active ? 'none' : 'auto'};
  padding: ${spacing.sm} ${spacing.sd};
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background: ${colour.lightGrey}
  }
`
