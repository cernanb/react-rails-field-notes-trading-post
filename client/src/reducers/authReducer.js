export default (state={ profile: { } }, action ) => {

  switch(action.type) {
    case 'LOGGED_IN':
      console.log('inside logged in')
      const { profile } = action
      return Object.assign({}, state, {profile})
    default:
      return state

  }

}
