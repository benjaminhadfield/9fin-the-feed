import React from 'react'
import Spinner from 'react-spinkit'
import styled from 'styled-components'
import { colour, spacing } from '../../constants/style'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${spacing.sd};
  box-sizing: border-box;
`

export default () => (
  <Container>
    <Spinner color={colour.blue} name='chasing-dots' />
  </Container>
)
