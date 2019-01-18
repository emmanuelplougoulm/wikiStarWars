import React, { PureComponent } from "react";
import { charactersPictures } from "../data/images";

const BASE_IMG_SEARCH = "../assets/";

class CharacterDetail extends PureComponent {
  render() {
    console.log("renderCharacter detail");

    const { currentCharacter, homeworld, species, starships } = this.props;
    const { name, birth_year, eye_color, height, skin_color } = currentCharacter;
    const nameSearch = charactersPictures[name];

    return (
      <div className="character-detail">
        <div className="character-detail-card">
          <img src={`${BASE_IMG_SEARCH}${nameSearch}`} alt="current character" />
        </div>
        <div className="character-detail-card">
          <h4>Name:{name}</h4>
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
  }
}

export default CharacterDetail;
