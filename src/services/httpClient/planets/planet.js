import axios from "axios";

export const getPlanet = homeworldURL =>
  axios
    .get(homeworldURL)
    .then(response => response.data)
    .catch(err => console.log(err));
