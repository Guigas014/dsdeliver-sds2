import axios from "axios";

const URL = 'https://gui-sds2.herokuapp.com';
const mapboxToken = process.env.REACT_APP_TOKEN_MAP_BOX;

export function fetchProducts() {
  return axios(`${URL}/products`)
}

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}
