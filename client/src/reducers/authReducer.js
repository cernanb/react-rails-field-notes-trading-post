export default (state={ profile: { } }, action ) => {

  switch(action.type) {
    case 'LOGGED_IN':
      const { profile } = action
      return Object.assign({}, state, profile)
    default:
      return state

  }

}
