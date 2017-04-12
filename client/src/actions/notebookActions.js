import NotebookService from '../services/notebookService'

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
