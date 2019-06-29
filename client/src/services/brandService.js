const fetchBrands = () =>
  fetch(`http://localhost:3001/api/v1/brands`, {
    headers: {
      Authorization: `${localStorage.token}`,
    },
  })
    .then(res => res.json())
    .then(data => data);

export default {
  fetchBrands,
};
