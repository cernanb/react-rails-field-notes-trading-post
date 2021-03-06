import AuthService from '../services/authService';

export const signup = user => dispatch => {
  AuthService.signup(user)
    .then(data => {
      if (data.errors) throw new Error(data.errors.message);
      const { profile, token } = data;

      AuthService.storeToken(token);
      AuthService.storeProfile(profile);

      dispatch({
        type: 'LOGGED_IN',
        profile,
      });
    })
    .catch(err => console.log(err));
};

export const setProfile = profile => ({
  type: 'LOGGED_IN',
  profile,
});

export const login = user => dispatch => {
  AuthService.login(user)
    .then(data => {
      if (data.errors) throw new Error(data.errors.message);
      const { profile, token } = data;

      AuthService.storeToken(token);
      AuthService.storeProfile(profile);

      dispatch({
        type: 'LOGGED_IN',
        profile,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: 'USER_NOT_FOUND',
        err,
      });
    });
};

export const logout = () => dispatch => {
  AuthService.logout();

  dispatch({
    type: 'LOGGED_OUT',
    profile: {},
  });
};
