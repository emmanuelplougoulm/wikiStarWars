import axios from "axios";

export const getStarship = starshipsURL =>
  axios
    .get(starshipsURL)
    .then(response => response)
    .catch(err => console.log(err));
