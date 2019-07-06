const fetchBrands = () =>
  fetch(`http://localhost:3001/api/v1/brands`, {
    headers: {
      Authorization: `${localStorage.token}`,
    },
  })
    .then(res => res.json())
    .then(data => data);

const createBrand = brand => {
  const newBrand = Object.assign({}, { brand });
  return fetch(`http://localhost:3001/api/v1/brands`, {
    method: 'POST',
    body: JSON.stringify(newBrand),
    headers: {
      Authorization: `${localStorage.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};
export default {
  fetchBrands,
  createBrand,
};
