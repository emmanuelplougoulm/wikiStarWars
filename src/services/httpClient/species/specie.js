import axios from "axios";

export const getSpecie = speciesURL =>
  axios
    .get(speciesURL)
    .then(response => response.data)
    .catch(err => console.log(err));
