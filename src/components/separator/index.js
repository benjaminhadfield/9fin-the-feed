import React from 'react'
import styled from 'styled-components'
import { spacing, colour } from '../../constants/style'

const Separator = styled.span`
  padding: ${spacing.sm};
  color: ${colour.darkGrey};
`

export default () => <Separator children='&middot;' />
