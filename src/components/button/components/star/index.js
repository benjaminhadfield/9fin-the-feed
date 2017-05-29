import React from 'react'
import styled from 'styled-components'
import { colour, fontFamily, fontSize, borderRadius } from '../../../../constants/style'

const Button = styled.button`
  display: inline-block;
  background: ${props => props.disabled ? colour.gold : 'white'};
  padding: 3px 7px;
  font-family: ${fontFamily.body};
  font-size: ${fontSize.small};
  color: white;
  border-radius: ${borderRadius.sm};
  border: 0;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    background: ${colour.lightGrey};
  }
`

export default ({loading, isFave, ...props}) => (
  <Button disabled={isFave || loading} {...props}>
    {
      loading
        ? '...'
        : isFave
          ? '💛'
          : '❤️'
    }
  </Button>
)
