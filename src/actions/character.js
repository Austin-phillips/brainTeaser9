import axios from 'axios';
import { setFlash } from './flash';

const setCharacters = (characters) => {
  return { type: 'GET_CHARACTERS', characters }
}

export const getCharacters = () => {
  return dispatch => {
    axios.get('https://api.got.show/api/characters')
      .then(res => {
        dispatch(setCharacters(res.data))
      })
      .catch(err => {
        dispatch(setFlash('Error loading characters, please try again.', 'red'))
      })
  }
}

export default getCharacters;