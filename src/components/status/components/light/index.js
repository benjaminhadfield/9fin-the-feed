import styled from 'styled-components'

export default styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.websocketLoading ? '#f39c12' : props.websocketConnected ? '#1abc9c' : '#e74c3c'};
`
