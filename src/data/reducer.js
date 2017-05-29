import * as actionTypes from './actions'

const initialState = {
  travel: [],
  reviews: [],
  gifs: [],
  faves: [],
  loading: true,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SYNC_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.SYNC_SUCCESS:
      return {
        ...state,
        travel: action.data.travel,
        reviews: action.data.reviews,
        gifs: action.data.gifs,
        loading: false
      }
    case actionTypes.SYNC_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case actionTypes.TRAVEL_WEBSOCKET_NEW_EVENT:
      return {
        ...state,
        travel: [action.data.data, ...state.travel]
      }
    case actionTypes.STAR_SUCCESS:
      return {
        ...state,
        faves: [action.item, ...state.faves]
      }
    default:
      return state
  }
}
