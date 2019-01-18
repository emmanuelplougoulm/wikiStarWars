import axios from "axios";
import { BASE_URL } from "../clientHttp";

const CHARACTERS_ROUTE = "people/";

export const getCharacters = indexPage =>
  axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?page=${indexPage}`)
    .then(response => response.data)
    .catch(err => console.error(err));

export const updateResearch = searchText => {
  return axios
    .get(`${BASE_URL}${CHARACTERS_ROUTE}?search=${searchText}`)
    .then(response => response.data)
    .catch(err => console.error(err));
};