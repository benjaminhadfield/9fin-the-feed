import axios from 'axios'
import io from 'socket.io-client'

export const SYNC_REQUEST = 'SYNC_REQUEST'
export const SYNC_SUCCESS = 'SYNC_SUCCESS'
export const SYNC_FAILURE = 'SYNC_FAILURE'
export const STAR_REQUEST = 'STAR_REQUEST'
export const STAR_SUCCESS = 'STAR_SUCCESS'
export const STAR_FAILURE = 'STAR_FAILURE'
export const TRAVEL_WEBSOCKET_CONNECTION_REQUEST = 'TRAVEL_WEBSOCKET_CONNECTION_REQUEST'
export const TRAVEL_WEBSOCKET_CONNECTION_SUCCESS = 'TRAVEL_WEBSOCKET_CONNECTION_SUCCESS'
export const TRAVEL_WEBSOCKET_CONNECTION_FAILURE = 'TRAVEL_WEBSOCKET_CONNECTION_FAILURE'
export const REVIEWS_WEBSOCKET_CONNECTION_REQUEST = 'REVIEWS_WEBSOCKET_CONNECTION_REQUEST'
export const REVIEWS_WEBSOCKET_CONNECTION_SUCCESS = 'REVIEWS_WEBSOCKET_CONNECTION_SUCCESS'
export const REVIEWS_WEBSOCKET_CONNECTION_FAILURE = 'REVIEWS_WEBSOCKET_CONNECTION_FAILURE'
export const GIFS_WEBSOCKET_CONNECTION_REQUEST = 'GIFS_WEBSOCKET_CONNECTION_REQUEST'
export const GIFS_WEBSOCKET_CONNECTION_SUCCESS = 'GIFS_WEBSOCKET_CONNECTION_SUCCESS'
export const GIFS_WEBSOCKET_CONNECTION_FAILURE = 'GIFS_WEBSOCKET_CONNECTION_FAILURE'
export const TRAVEL_WEBSOCKET_NEW_EVENT = 'TRAVEL_WEBSOCKET_NEW_EVENT'
export const REVIEWS_WEBSOCKET_NEW_EVENT = 'REVIEWS_WEBSOCKET_NEW_EVENT'
export const GIFS_WEBSOCKET_NEW_EVENT = 'GIFS_WEBSOCKET_NEW_EVENT'

const syncRequest = () => ({type: SYNC_REQUEST})
const syncSuccess = (data) => ({type: SYNC_SUCCESS, data})
const syncFailure = (error) => ({type: SYNC_FAILURE, error})
const starRequest = (dataType, item) => ({type: STAR_REQUEST, dataType, item})
const starSuccess = (dataType, item) => ({type: STAR_SUCCESS, dataType, item})
const starFailure = () => ({type: STAR_FAILURE})
const travelWebsocketConnectionRequest = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_REQUEST})
const travelWebsocketConnectionSuccess = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_SUCCESS})
const travelWebsocketConnectionFailure = () => ({type: TRAVEL_WEBSOCKET_CONNECTION_FAILURE})
const reviewsWebsocketConnectionRequest = () => ({type: REVIEWS_WEBSOCKET_CONNECTION_REQUEST})
const reviewsWebsocketConnectionSuccess = () => ({type: REVIEWS_WEBSOCKET_CONNECTION_SUCCESS})
const reviewsWebsocketConnectionFailure = () => ({type: REVIEWS_WEBSOCKET_CONNECTION_FAILURE})
const gifsWebsocketConnectionRequest = () => ({type: GIFS_WEBSOCKET_CONNECTION_REQUEST})
const gifsWebsocketConnectionSuccess = () => ({type: GIFS_WEBSOCKET_CONNECTION_SUCCESS})
const gifsWebsocketConnectionFailure = () => ({type: GIFS_WEBSOCKET_CONNECTION_FAILURE})
const travelWebsocketNewEvent = (data) => ({type: TRAVEL_WEBSOCKET_NEW_EVENT, data})
const reviewsWebsocketNewEvent = (data) => ({type: REVIEWS_WEBSOCKET_NEW_EVENT, data})
const gifsWebsocketNewEvent = (data) => ({type: GIFS_WEBSOCKET_NEW_EVENT, data})

export const sync = () => dispatch => {
  dispatch(syncRequest())
  axios.get('https://the-london-feed.herokuapp.com/sync')
    .then(res => dispatch(syncSuccess(res.data)))
    .catch(err => dispatch(syncFailure(err)))
}

export const star = (dataType, item) => dispatch => {
  dispatch(starRequest(dataType, item))
  axios.post('https://the-london-feed.herokuapp.com/star', {
    data_type: dataType,
    data_id: item.id
  })
    .then(res => dispatch(starSuccess(dataType, item)))
    .catch(err => dispatch(starFailure(err)))
}

// these next three connect functions should be abstracted to reduce repeated code
export const connectToTravelWebsocket = () => dispatch => {
  const socket = io('https://the-london-feed.herokuapp.com/travel')
  dispatch(travelWebsocketConnectionRequest())
  // connect to the travel websocket
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

export const connectToReviewsWebsocket = () => dispatch => {
  const socket = io('https://the-london-feed.herokuapp.com/reviews')
  dispatch(reviewsWebsocketConnectionRequest())
  // connect to the travel websocket
  socket.on('connect', () => {
    dispatch(reviewsWebsocketConnectionSuccess())
    // start receiving data
    socket.emit('start', {data: {}})
    socket.on('message', (data) => {
      if (typeof data.data !== 'string') {
        dispatch(reviewsWebsocketNewEvent(data))
      }
    })
  })
  socket.on('connect_error', () => dispatch(reviewsWebsocketConnectionFailure()))
}

export const connectToGifsWebsocket = () => dispatch => {
  const socket = io('https://the-london-feed.herokuapp.com/gifs')
  dispatch(gifsWebsocketConnectionRequest())
  // connect to the travel websocket
  socket.on('connect', () => {
    dispatch(gifsWebsocketConnectionSuccess())
    // start receiving data
    socket.emit('start', {data: {}})
    socket.on('message', (data) => {
      // ignore the ack responses
      if (typeof data.data !== 'string') {
        dispatch(gifsWebsocketNewEvent(data))
      }
    })
  })
  socket.on('reconnect', () => console.log('reconnect'))
  socket.on('connect_error', () => dispatch(gifsWebsocketConnectionFailure()))
}
