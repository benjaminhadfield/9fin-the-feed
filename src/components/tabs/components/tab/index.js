import styled from 'styled-components'
import { colour, spacing, borderRadius } from '../../../../constants/style'
import { NavLink } from 'react-router-dom'

export default styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  background: ${props => props.active ? colour.blue : 'white'};
  color: ${props => props.active ? 'white' : colour.blue};
  border: 1px solid ${colour.lightGrey};
  margin-right: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.sd};
  cursor: ${props => props.active ? 'default' : 'pointer'};
  pointer-events: ${props => props.active ? 'none' : 'auto'};
  text-align: center;
  box-sizing: border-box;
  border-radius: ${borderRadius.sm};

  &:hover {
    border-color: ${colour.medGrey};
    background: ${colour.lightGrey};
    color: ${colour.blueHover};
  }
`
