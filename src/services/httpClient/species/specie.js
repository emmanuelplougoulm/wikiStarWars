import axios from "axios";

export const getSpecie = speciesURL =>
  axios
    .get(speciesURL)
    .then(response => response)
    .catch(err => console.log(err));
