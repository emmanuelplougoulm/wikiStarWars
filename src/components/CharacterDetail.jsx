import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { charactersPictures } from "../data/images";
import { getInfos } from "../store/apiCalls/actionsCreator";

const BASE_IMG_SEARCH = "../assets/";

class CharacterDetail extends PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.currentCharacter.name !== this.props.currentCharacter.name) {
      this.props.loadCharacterInfos()
    }
  }

  arrayToString = array => array.map(element => element.name).join(', ');

  render() {
    const { currentCharacter, homeworld, species, starships } = this.props;
    console.log(starships)
    const { name, birth_year, eye_color, height, skin_color } = currentCharacter;
    const nameSearch = charactersPictures[name];

    const speciesNames = this.arrayToString(species);
    const starshipsNames = this.arrayToString(starships);

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
          <p>Species: {speciesNames}</p>
          <p>Starships: {starshipsNames}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  characters: state.apiCalls.characters,
  currentCharacter: state.apiCalls.currentCharacter,
  homeworld: state.apiCalls.homeworld,
  species: state.apiCalls.species,
  starships: state.apiCalls.starships,
});


const mapDispatchToProps = dispatch => ({
  loadCharacterInfos: () => dispatch(getInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);