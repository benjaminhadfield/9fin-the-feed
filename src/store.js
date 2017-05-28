import { createStore, applyMiddleware } from 'redux'
import reducer from './data/reducer'
import thunkMiddleware from 'redux-thunk'

export default (initialState) => {
  const middleware = process.env.NODE_ENV === 'production'
    ? [thunkMiddleware]
    : [thunkMiddleware, require('redux-logger').default]
  return createStore(reducer, initialState, applyMiddleware(...middleware))
}
