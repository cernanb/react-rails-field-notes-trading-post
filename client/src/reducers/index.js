import { combineReducers } from 'redux'
import auth from './authReducer'
import notebooks from './notebooksReducer'
import selectedNotebook from './selectedNotebookReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth,
  notebooks,
  selectedNotebook,
  form: formReducer
})
