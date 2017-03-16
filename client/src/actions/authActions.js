import AuthService from '../services/authService'

export const signup = (user) => {

  return (dispatch) => {
    AuthService.signup(user)
      .then(data => {

        const { profile, token } = data

        AuthService.storeToken(token)

        dispatch({
          type: 'LOGGED_IN',
          profile
        })

      })
      .catch(err => err)
  }
}

export const login = (user) => {
  
  return (dispatch) => {
      AuthService.login(user)
        .then(data => {

          const { profile, token } = data

          AuthService.storeToken(token)

          dispatch({
            type: 'LOGGED_IN',
            profile
          })

        })
        .catch(err => err)
  }
}

export const logout = () => {

  return (dispatch) => {

    AuthService.logout()

    dispatch({
      type: 'LOGGED_OUT',
      profile: {}
    })

  }

}
