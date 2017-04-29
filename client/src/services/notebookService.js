const fetchNotebooks = () => {
  return fetch(`http://localhost:3001/api/v1/notebooks`, {
    headers: {
      Authorization: `${localStorage.token}`
    }
  })
    .then(res => res.json())
    .then(data => data)
}

const fetchUserNotebooks = () => {
  const { id } = localStorage.profile
  return fetch(`http://localhost:3001/api/v1/users/${id}/notebooks`, {
    headers: {
      Authorization: `${localStorage.token}`
    }
  })
    .then(res => res.json())
    .then(data => data)
}

const fetchNotebook = (id) => {

  return fetch(`http://localhost:3001/api/v1/notebooks/${id}`, {
    headers: {
      Authorization: `${localStorage.token}`
    }
  })
    .then(res => res.json())
    .then(data => data)
}

const createNotebook = (notebook) => {
  const newNotebook = Object.assign({}, {notebook: notebook})

  return fetch(`http://localhost:3001/api/v1/notebooks`, {
    headers: {
      Authorization: `${localStorage.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newNotebook)
  })
    .then(res => res.json())
    .then(data => data)
}

export default {
  fetchNotebooks,
  fetchNotebook,
  fetchUserNotebooks,
  createNotebook
}
