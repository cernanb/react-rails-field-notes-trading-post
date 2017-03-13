import AuthService from '../services/authService'

export const signup = (user) => {

    return (dispatch) => {
        AuthService.signup(user)
            .then(data => {

                const { profile } = data

                dispatch({
                  type: 'LOGGED_IN',
                  profile
                })

            })
            .catch(err => err)
    }
}
