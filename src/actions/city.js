import axios from 'axios';
import { setFlash } from './flash';

const setCities = (cities) => {
  return { type: 'GET_CITIES', cities }
}

export const getCities = () => {
  return dispatch => {
    axios.get('https://api.got.show/api/cities')
      .then(res => {
        dispatch(setCities(res.data))
      })
      .catch(err => {
        dispatch(setFlash('Error loading characters, please try again.', 'red'))
      })
  }
}

export default getCities;