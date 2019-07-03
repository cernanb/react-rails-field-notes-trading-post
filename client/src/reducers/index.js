import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import notebooks from './notebooksReducer';
import selectedNotebook from './selectedNotebookReducer';
import brands from './brandsReducer';

export default combineReducers({
  auth,
  notebooks,
  brands,
  selectedNotebook,
  form: formReducer,
});
