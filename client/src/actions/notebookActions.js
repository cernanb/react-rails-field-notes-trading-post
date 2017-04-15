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

export const getNotebook = (notebookId) => {

  return (dispatch) => {
    NotebookService.fetchNotebook(notebookId)
      .then(data => {
        dispatch({
          type: 'NOTEBOOK_RECEIVED',
          notebook: data
        })
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
