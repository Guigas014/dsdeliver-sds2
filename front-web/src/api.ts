import axios from "axios";

const URL = 'https://gui-sds2.herokuapp.com';

export function fetchProducts() {
  return axios(`${URL}/products`)
}
