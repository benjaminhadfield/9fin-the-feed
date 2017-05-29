import axios from 'axios'
import io from 'socket.io-client'

const travelSocket = io('https://the-london-feed.herokuapp.com/travel')

export const SYNC_REQUEST = 'SYNC_REQUEST'
export const SYNC_SUCCESS = 'SYNC_SUCCESS'
export const SYNC_FAILURE = 'SYNC_FAILURE'
export const STAR_REQUEST = 'STAR_REQUEST'
export const STAR_SUCCESS = 'STAR_SUCCESS'
export const STAR_FAILURE = 'STAR_FAILURE'
export const TRAVEL_WEBSOCKET_CONNECTION_REQUEST = 'TRAVEL_WEBSOCKET_CONNECTION_REQUEST'
export const TRAVEL_WEBSOCKET_CONNECTION_SUCCESS = 'TRAVEL_WEBSOCKET_CONNECTION_SUCCESS'
export const TRAVEL_WEBSOCKET_CONNECTION_FAILURE = 'TRAVEL_WEBSOCKET_CONNECTION_FAILURE'
export const TRAVEL_WEBSOCKET_NEW_EVENT = 'TRAVEL_WEBSOCKET_NEW_EVENT'

const syncRequest = () => ({type: SYNC_REQUEST})
const syncSuccess = (data) => ({type: SYNC_SUCCESS, data})
const syncFailure = (error) => ({type: SYNC_FAILURE, error})
const starRequest = () => ({type: STAR_REQUEST})
const starSuccess = (item) => ({type: STAR_SUCCESS, item})
const starFailure = () => ({type: STAR_FAILURE})
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

export const star = (dataType, dataId) => dispatch => {
  dispatch(starRequest())
  axios.post('https://the-london-feed.herokuapp.com/star', {
    data_type: dataType,
    data_id: dataId
  })
    .then(res => dispatch(starSuccess({dataType, dataId})))
    .catch(err => dispatch(starFailure(err)))
}

export const connectToTravelWebsocket = () => dispatch => {
  dispatch(travelWebsocketConnectionRequest())
  // connect to the travel webhook
  travelSocket.on('connect', () => {
    dispatch(travelWebsocketConnectionSuccess())
    // start receiving data
    travelSocket.emit('start', {data: {}})
    travelSocket.on('message', (data) => {
      if (typeof data.data !== 'string') {
        dispatch(travelWebsocketNewEvent(data))
      }
    })
  })
  travelSocket.on('connect_error', () => dispatch(travelWebsocketConnectionFailure()))
}
