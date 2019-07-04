export default (state = [], action) => {
  switch (action.type) {
    case 'BRANDS_RECEIVED':
      return Object.assign([], action.brands);
    case 'BRAND_CREATED':
      return [...state, action.brand];
    default:
      return state;
  }
};
