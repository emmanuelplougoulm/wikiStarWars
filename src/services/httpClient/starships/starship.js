import axios from "axios";

export const getStarship = starshipsURL =>
  axios
    .get(starshipsURL)
    .then(response => response.data)
    .catch(err => console.log(err));

export const getStarships = starshipsURL => Promise.all(starshipsURL.map(starshipURL => getStarship(starshipURL)));
