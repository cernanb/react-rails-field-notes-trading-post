const signup = (user) => {

  const newUser = {user}

  return fetch(`http://localhost:3001/api/v1/signup`, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(data => data)
}

const login = (user) => {

  return fetch(`http://localhost:3001/api/v1/login`, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => err)
}

const storeToken = (token) => {
  localStorage.token = token
}

const storeProfile = (profile) => {
  localStorage.profile = JSON.stringify(profile)
}

const isAuthenticated = () => !!localStorage.token

const logout = () => {

  localStorage.removeItem('token')
  localStorage.removeItem('profile')

}

const currentUser = () => JSON.parse(localStorage.profile)


export default {
  signup,
  storeToken,
  storeProfile,
  isAuthenticated,
  logout,
  login,
  currentUser
}
