import { combineReducers } from 'redux'
import auth from './authReducer'
import notebooks from './notebooksReducer'
import selectedNotebook from './selectedNotebookReducer'

export default combineReducers({
  auth,
  notebooks,
  selectedNotebook
})
