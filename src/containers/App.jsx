import "../style/style.css";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CharactersList from "./CharactersList";
import CharacterDetail from "../components/CharacterDetail";
import { getCharacters, updateResearch, getNextPage } from "../services/httpClient/people/characters";
import { getPlanet } from "../services/httpClient/planets/planet";
import { getSpecie } from "../services/httpClient/species/specie";
import { getStarship } from "../services/httpClient/starships/starship";

class App extends Component {
  state = {
    currentCharacter: [],
    charactersList: [],
    displayError: false,
    nextCharacters: [],
    currentPage: 1
  };

  componentDidMount() {
    this.initCurrentCharacter();
    this.initCharactersList();
  }

  initCurrentCharacter = () => {
    getCharacters(this.state.currentPage).then(characters => {
      this.setState({
        currentCharacter: characters.results[0],
        nextCharacters: characters.next
      });
      this.getAdditionalInfo();
    });
  };

  getAdditionalInfo = () => {
    const { currentCharacter } = this.state;
    this.getHomeWorld(currentCharacter.homeworld);
    this.getSpecies(currentCharacter.species);
    this.getStarships(currentCharacter.starships);
  };

  initCharactersList = () => {
    getCharacters(this.state.currentPage).then(characters => {
      this.setState({ charactersList: characters.results.slice(1, 6) });
    });
  };

  getNextCharacters = () => {
    if (this.state.currentPage < 9) {
      this.setState({ currentPage: this.state.currentPage + 1 }, () => {
        getCharacters(this.state.currentPage).then(characters => {
          this.setState({
            charactersList: characters.results.slice(1, 6)
          });
        });
      });
    } else {
    }
  };

  getPreviousCharacters = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 }, () => {
        getCharacters(this.state.currentPage).then(characters => {
          this.setState({
            charactersList: characters.results.slice(1, 6)
          });
        });
      });
    } else {
    }
  };

  onClickListItem = character => this.setState({ currentCharacter: character }, this.getAdditionalInfo);

  searchByName = searchText => {
    updateResearch(searchText)
      .then(response => {
        if (response.results && Array.isArray(response.results) && response.results.length > 0) {
          this.setState({
            currentCharacter: response.results[0],
            displayError: false
          });
        } else {
          this.setState({ displayError: true });
        }
      })
      .catch(err => console.error(err));
  };

  getMoreCharacters = () => {
    getNextPage().then(characters => {
      this.setState({
        charactersList: characters.data.results.slice(1, 6),
        nextCharacters: characters.data.next
      });
    });
  };

  getHomeWorld = homeworldURL => {
    getPlanet(homeworldURL)
      .then(response => {
        this.setState({ homeworld: response.data.name });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  getSpecies = speciesURL => {
    getSpecie(speciesURL)
      .then(response => {
        this.setState({ species: response.data.name });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  getStarships = starshipsURL => {
    const promises = starshipsURL.map(starshipURL => this.getStarship(starshipURL));
    return Promise.all(promises).then(results =>
      this.setState({ starships: results.map(result => `${result.name} `) })
    );
  };

  getStarship = starshipsURL =>
    getStarship(starshipsURL)
      .then(results => results.data)
      .catch(err => {
        console.log("err", err);
      });

  renderCharactersList = () => {
    if (this.state.charactersList.length >= 4) {
      return (
        <CharactersList
          charactersList={this.state.charactersList}
          onClickListItem={this.onClickListItem}
          next={this.getNextCharacters}
          previous={this.getPreviousCharacters}
          nextCharactersList={this.state.nextCharactersList}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="../assets/star_wars_white.png" alt="resistance white logo" height="42" />
          <img src="../assets/resistance-logo.jpg" alt="resistance white logo" height="42" />
          {/* <p>Wookie translator</p> */}
        </div>
        <div className="section1">
          <img src="../assets/star-wars-logo-2.png" alt="resistance white logo" height="110" />
          <SearchBar searchByName={this.searchByName} displayError={this.state.displayError} />
        </div>
        <CharacterDetail
          name={this.state.currentCharacter.name}
          birth_year={this.state.currentCharacter.birth_year}
          eye_color={this.state.currentCharacter.eye_color}
          homeworld={this.state.homeworld}
          height={this.state.currentCharacter.height}
          skin_color={this.state.currentCharacter.skin_color}
          species={this.state.species}
          starships={this.state.starships}
        />
        <div>{this.renderCharactersList()}</div>
      </div>
    );
  }
}

export default App;
