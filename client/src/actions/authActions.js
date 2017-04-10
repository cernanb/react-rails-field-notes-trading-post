import AuthService from '../services/authService'

export const signup = (user) => {

  return (dispatch) => {
    AuthService.signup(user)
      .then(data => {

        const { profile, token } = data

        AuthService.storeToken(token)
        AuthService.storeProfile(profile)

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
          if (data.errors) throw new Error(data.errors.message)
          const { profile, token } = data

          AuthService.storeToken(token)
          AuthService.storeProfile(profile)

          dispatch({
            type: 'LOGGED_IN',
            profile
          })

        })
        .catch(err => {
          console.log(err)
          dispatch({
            type: 'USER_NOT_FOUND',
            err
          })
        })
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
