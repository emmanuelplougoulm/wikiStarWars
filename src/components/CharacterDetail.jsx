import React from "react";

const BASE_IMG_SEARCH = "../assets/";

export const charactersPictures = {
  "Luke Skywalker": "luke.jpg",
  boba: "bobafett2.jpg",
  "C-3PO": "c3po.jpg",
  Chewbacca: "chewbacca.jpg",
  "Darth Vader": "darthvader1.jpg",
  obiwan: "obiwan.jpg",
  padme: "padme.jpg",
  "R2-D2": "r2d2.jpg",
  "Owen Lars": "owen.jpg",
  "Beru Whitesun lars": "beru.jpg",
  "Leia Organa": "leia.jpg",
  "Wilhuff Tarkin": "wilhuffTarkin.jpg",
  "Han Solo": "hansolo.jpg",
  Greedo: "greedo.jpg",
  "Jabba Desilijic Tiure": "jabba.jpg",
  "IG-88": "ig-88.jpg",
  Bossk: "bossk.jpg",
  "Lando Calrissian": "lando.jpg",
  Lobot: "lobot.jpg",
  Ackbar: "ackbar.jpg"
};

const CharacterDetail = props => {
  console.log("character details");
  const { name, birth_year, eye_color, height, homeworld, skin_color, species, starships } = props;
  const nameSearch = charactersPictures[name];
  // console.log(species)
  return (
    <div className="characterDetail">
      <div className="character-img">
        <img src={`${BASE_IMG_SEARCH}${nameSearch}`} alt="current character" />
      </div>
      <div className="characterInfo">
        <h2>Name:{name}</h2>
        <p>Birth year: {birth_year}</p>
        <p>Eye color: {eye_color}</p>
        <p>Height: {height}</p>
        <p>Homeworld: {homeworld}</p>
        <p>Skin color: {skin_color}</p>
        <p>Species: {species}</p>
        <p>Starships: {starships}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
