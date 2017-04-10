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
