export default (state = { profile: {}, err_message: '' }, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      const { profile } = action;
      return Object.assign({}, state, { profile });
    case 'LOGGED_OUT':
      return Object.assign({}, state, { profile: action.profile });
    case 'USER_NOTEBOOKS_RECEIVED':
      return {
        ...state,
        profile: { ...state.profile, notebooks: action.notebooks },
      };
    case 'USER_NOT_FOUND':
      return Object.assign({}, state, { err_message: action.err.message });
    default:
      return state;
  }
};
