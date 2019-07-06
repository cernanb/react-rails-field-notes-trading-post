export default (state = [], action) => {
  switch (action.type) {
    case 'NOTEBOOKS_RECEIVED':
      return Object.assign([], action.notebooks);
    case 'NOTEBOOK_CREATED':
      return [...state, action.notebook];
    default:
      return state;
  }
};
