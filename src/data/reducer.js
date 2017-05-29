import * as actionTypes from './actions'

const initialState = {
  travel: [],
  reviews: [],
  gifs: [],
  faves: [],
  travelItemLoading: false,
  reviewsItemLoading: false,
  gifsItemLoading: false,
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
    case actionTypes.STAR_REQUEST:
      return {
        ...state,
        [action.dataType + 'ItemLoading']: action.dataId
      }
    case actionTypes.STAR_SUCCESS:
      const fave = {dataType: action.dataType, dataId: action.dataId}
      return {
        ...state,
        faves: [fave, ...state.faves],
        [action.dataType + 'ItemLoading']: false
      }
    case actionTypes.STAR_FAILURE:
      return {
        ...state,
        error: action.error,
        [action.dataType + 'ItemLoading']: false
      }
    default:
      return state
  }
}
