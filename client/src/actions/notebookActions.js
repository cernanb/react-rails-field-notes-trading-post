import NotebookService from '../services/notebookService'
import { browserHistory } from 'react-router'

export const getNotebooks = () => {

  return (dispatch) => {
    NotebookService.fetchNotebooks()
      .then(data => {
        dispatch({
          type: 'NOTEBOOKS_RECEIVED',
          notebooks: data
        })
      })
  }
}

export const getUserNotebooks = () => {

  return (dispatch) => {
    NotebookService.fetchUserNotebooks()
      .then(data => {
        dispatch({
          type: 'USER_NOTEBOOKS_RECEIVED',
          notebooks: data
        })
      })
  }
}

export const addUserNotebook = (id) => {
  console.log(id)
  return (dispatch) => {
    NotebookService.addUserNotebook(id)
      .then(data => {
        dispatch({
          type: 'USER_NOTEBOOK_ADDED',
          notebooks: data
        })
      })
  }
}

export const getNotebook = (notebookId) => {

  return (dispatch) => {
    NotebookService.fetchNotebook(notebookId)
      .then(data => {
        dispatch({
          type: 'NOTEBOOK_RECEIVED',
          notebook: data
        })
        browserHistory.push('/notebooks')
      })
  }
}

export const createNotebook = (notebook) => {

  return (dispatch) => {
    NotebookService.createNotebook(notebook)
      .then(data => {
        dispatch({
          type: 'NOTEBOOK_CREATED',
          notebook: data
        })
        browserHistory.push('/notebooks')
      })
  }
}
