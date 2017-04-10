import { combineReducers } from 'redux'
import auth from './authReducer'
import notebooks from './notebooksReducer'

export default combineReducers({
  auth,
  notebooks
})
