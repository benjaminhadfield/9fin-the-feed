import axios from 'axios'

export const SYNC_REQUEST = 'SYNC_REQUEST'
export const SYNC_SUCCESS = 'SYNC_SUCCESS'
export const SYNC_FAILURE = 'SYNC_FAILURE'

const syncRequest = () => ({type: SYNC_REQUEST})
const syncSuccess = (payload) => ({type: SYNC_SUCCESS, payload})
const syncFailure = (error) => ({type: SYNC_FAILURE, error})

export const sync = () => dispatch => {
  dispatch(syncRequest())
  axios.get('https://the-london-feed.herokuapp.com/sync')
    .then(res => dispatch(syncSuccess(res.data)))
    .catch(err => dispatch(syncFailure(err)))
}
