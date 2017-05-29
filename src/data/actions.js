import axios from 'axios'
import io from 'socket.io-client'

export const SYNC_REQUEST = 'SYNC_REQUEST'
export const SYNC_SUCCESS = 'SYNC_SUCCESS'
export const SYNC_FAILURE = 'SYNC_FAILURE'
export const TRAVEL_WEBSOCKET_CONNECTION_REQUEST = 'TRAVEL_WEBSOCKET_CONNECTION_REQUEST'
export const TRAVEL_WEBSOCKET_CONNECTION_SUCCESS = 'TRAVEL_WEBSOCKET_CONNECTION_SUCCESS'
export const TRAVEL_WEBSOCKET_CONNECTION_FAILURE = 'TRAVEL_WEBSOCKET_CONNECTION_FAILURE'
export const TRAVEL_WEBSOCKET_NEW_EVENT = 'TRAVEL_WEBSOCKET_NEW_EVENT'

const syncRequest = () => ({type: SYNC_REQUEST})
const syncSuccess = (data) => ({type: SYNC_SUCCESS, data})
const syncFailure = (error) => ({type: SYNC_FAILURE, error})
const travelWebsocketConnectionRequest = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_REQUEST})
const travelWebsocketConnectionSuccess = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_SUCCESS})
const travelWebsocketConnectionFailure = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_FAILURE})
const travelWebsocketNewEvent = (data) => ({type: TRAVEL_WEBSOCKET_NEW_EVENT, data})

export const sync = () => dispatch => {
  dispatch(syncRequest())
  axios.get('https://the-london-feed.herokuapp.com/sync')
    .then(res => dispatch(syncSuccess(res.data)))
    .catch(err => dispatch(syncFailure(err)))
}

export const connectToTravelWebsocket = () => dispatch => {
  dispatch(travelWebsocketConnectionRequest())
  const socket = io('http://the-london-feed.herokuapp.com/travel')
  // connect to the travel webhook
  socket.on('connect', () => {
    dispatch(travelWebsocketConnectionSuccess())
    // start receiving data
    socket.emit('start', {data: {}})
    socket.on('message', (data) => {
      if (typeof data.data !== 'string') {
        dispatch(travelWebsocketNewEvent(data))
      }
    })
  })
  socket.on('connect_error', () => dispatch(travelWebsocketConnectionFailure()))
}
