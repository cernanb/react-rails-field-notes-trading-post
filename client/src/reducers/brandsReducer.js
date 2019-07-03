export default (state = [], action) => {
  switch (action.type) {
    case 'BRANDS_RECEIVED':
      return Object.assign([], action.brands);
    default:
      return state;
  }
};
