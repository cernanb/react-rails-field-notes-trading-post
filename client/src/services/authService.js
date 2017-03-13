const signup = (user) => {
  const newUser = {user}

  fetch(`http://localhost:3001/api/v1/signup`, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(newUser)
  })
}


export default {
  signup
}
