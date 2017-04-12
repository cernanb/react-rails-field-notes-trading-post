const fetchNotebooks = () => {
  return fetch(`http://localhost:3001/api/v1/notebooks`, {
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

export default {
  fetchNotebooks,
  fetchNotebook
}
