import NotebookService from '../services/notebookService';

export const getNotebooks = () => dispatch => {
  NotebookService.fetchNotebooks().then(data => {
    dispatch({
      type: 'NOTEBOOKS_RECEIVED',
      notebooks: data,
    });
  });
};

export const getUserNotebooks = () => dispatch => {
  NotebookService.fetchUserNotebooks().then(data => {
    dispatch({
      type: 'USER_NOTEBOOKS_RECEIVED',
      notebooks: data,
    });
  });
};

export const addUserNotebook = id => dispatch => {
  NotebookService.addUserNotebook(id).then(data => {
    dispatch({
      type: 'USER_NOTEBOOK_ADDED',
      notebook: data,
    });
  });
};

export const getNotebook = notebookId => dispatch => {
  NotebookService.fetchNotebook(notebookId).then(data => {
    dispatch({
      type: 'NOTEBOOK_RECEIVED',
      notebook: data,
    });
    // browserHistory.push('/notebooks')
  });
};

export const createNotebook = (notebook, history) => dispatch => {
  NotebookService.createNotebook(notebook).then(data => {
    dispatch({
      type: 'NOTEBOOK_CREATED',
      notebook: data,
    });
    history.push(`/brands/${data.brand_id}`);
  });
};
