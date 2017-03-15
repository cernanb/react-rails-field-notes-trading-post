export default (state={ profile: { } }, action ) => {

  switch(action.type) {
    case 'LOGGED_IN':
      const { profile } = action
      return Object.assign({}, state, {profile})
    case 'LOGGED_OUT':
      return Object.assign({}, state, {profile: action.profile})
    default:
      return state

  }

}
