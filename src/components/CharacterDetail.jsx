import React, { PureComponent } from "react";
import { charactersPictures } from "../data/images";
import { getPlanet } from "../services/httpClient/planets/planet";
import { getSpecie } from "../services/httpClient/species/specie";
import { getStarship } from "../services/httpClient/starships/starship";

const BASE_IMG_SEARCH = "../assets/";

class CharacterDetail extends PureComponent {
  state = {
    homeworld: {},
    species: [],
    starships: []
  }

  componentDidMount() {
    this.fetchAPIData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCharacter.name !== this.props.currentCharacter.name) {
      this.fetchAPIData();
    }
  }

  fetchAPIData = () => {
    const {currentCharacter} = this.props;

    if (!currentCharacter.name) {
      return ;
    }

    return Promise.all([this.getHomeWorld(), this.getSpecies(), this.getStarships()])
    .then(([homeworld, species, starships]) => this.setState({
        homeworld, 
        species: species.map(specie => `${specie.name} `), 
        starships: starships.map(starship => `${starship.name} `)
      })
    )
  }

  getHomeWorld = () => getPlanet(this.props.currentCharacter.homeworld);

  getSpecies = () => {
    const {species} = this.props.currentCharacter;
    const promises = species.map(specie => getSpecie(specie));
    return Promise.all(promises);
  };

  getStarships = () => {
    const {starships} = this.props.currentCharacter;
    const promises = starships.map(starship => getStarship(starship));
    return Promise.all(promises);
  };

  render() {
    console.log("renderCharacter detail");

    const { currentCharacter } = this.props;
    const { name, birth_year, eye_color, height, skin_color } = currentCharacter;
    const { homeworld, species, starships } = this.state;
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
          <p>Homeworld: {homeworld ? homeworld.name : ''}</p>
          <p>Skin color: {skin_color}</p>
          <p>Species: {species}</p>
          <p>Starships: {starships}</p>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
