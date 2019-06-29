import BrandService from '../services/brandService';

export const getBrands = () => dispatch => {
  BrandService.fetchBrands().then(data => {
    dispatch({
      type: 'BRANDS_RECEIVED',
      notebooks: data,
    });
  });
};
