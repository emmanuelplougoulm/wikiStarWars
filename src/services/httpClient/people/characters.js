import axios from "axios";
import { BASE_URL } from "../clientHttp";

const CHARACTERS_ROUTE = "people/";

export const fetchCharacters = indexPage =>
  axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?page=${indexPage ? indexPage : 1}`)

export const searchCharacter = searchText => {
  return axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?search=${searchText}`)
    .then(response => response.data)
  // .catch(err => console.error(err));
};