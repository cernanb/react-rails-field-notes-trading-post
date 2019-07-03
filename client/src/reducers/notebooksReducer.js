export default (state = [], action) => {
  switch (action.type) {
    case 'NOTEBOOKS_RECEIVED':
      return Object.assign([], action.notebooks);
    case 'USER_NOTEBOOKS_RECEIVED':
      return Object.assign([], action.notebooks);
    default:
      return state;
  }
};
