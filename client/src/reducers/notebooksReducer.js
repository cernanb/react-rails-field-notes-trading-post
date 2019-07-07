export default (state = { allNotebooks: [], userNotebooks: [] }, action) => {
  switch (action.type) {
    case 'NOTEBOOKS_RECEIVED':
      return { ...state, allNotebooks: action.notebooks };
    case 'NOTEBOOK_CREATED':
      return {
        ...state,
        allNotebooks: state.allNotebooks.concat(action.notebook),
      };
    case 'USER_NOTEBOOKS_RECEIVED':
      return { ...state, userNotebooks: action.notebooks };
    case 'USER_NOTEBOOK_ADDED':
      return {
        ...state,
        userNotebooks: state.userNotebooks.concat(action.notebook),
      };
    default:
      return state;
  }
};
