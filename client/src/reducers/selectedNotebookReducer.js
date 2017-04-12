export default (state= {}, action) => {
  switch(action.type) {
    case 'NOTEBOOK_RECEIVED':
      return Object.assign({}, action.notebook)
    default:
      return state
  }
}
