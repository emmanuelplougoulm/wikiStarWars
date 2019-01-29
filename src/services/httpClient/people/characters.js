import axios from "axios";
import { BASE_URL } from "../clientHttp";

const CHARACTERS_ROUTE = "people/";

export const getCharacters = indexPage =>
  axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?page=${indexPage ? indexPage : 1}`)
    .then(response => response.data)
    .catch(err => console.error(err));

export const updateResearch = searchText => {
  return axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?search=${searchText}`)
    .then(response => response.data)
    .catch(err => console.error(err));
};


// actions

// const getCharactersAction = (indexPage) => {
//   return function (dispatch) {
//     dispatch({ type: GET_CHARACTERS });
//     return getCharacters(indexPage)
//       .then(characters => dispatch({ type: GET_CHARACTERS_SUCCESS, payload: characters }))
//       .catch(err => dispatch({ type: GET_CHARACTERS_ERROR, payload: err }))
//   }
// }