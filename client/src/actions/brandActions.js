import BrandService from '../services/brandService';

export const getBrands = () => dispatch => {
  BrandService.fetchBrands().then(data => {
    dispatch({
      type: 'BRANDS_RECEIVED',
      brands: data,
    });
  });
};

export const createBrand = (brand, history) => dispatch => {
  BrandService.createBrand(brand).then(data => {
    dispatch({
      type: 'BRAND_CREATED',
      brand: data,
    });
    history.push(`/brands/${data.id}`);
  });
};
