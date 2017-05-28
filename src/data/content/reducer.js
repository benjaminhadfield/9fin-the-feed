import * as actionTypes from './actions'

const initialState = {
  travel: [],
  reviews: [],
  gifs: [],
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
        travel: action.payload.travel,
        reviews: action.payload.reviews,
        gifs: action.payload.gifs,
        loading: false
      }
    case actionTypes.SYNC_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
