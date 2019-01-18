import "../style/style.css";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CharactersList from "./CharactersList";
import CharacterDetail from "../components/CharacterDetail";
import { getCharacters, updateResearch } from "../services/httpClient/people/characters";

class App extends Component {
  state = {
    currentCharacter: {},
    charactersList: [],
    displayError: false,
    currentPage: 1
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    getCharacters(this.state.currentPage).then(characters => {
      this.setState({
        currentCharacter: characters.results[0],
        charactersList: characters.results.slice(1, 10)
      });
    });
  };

  updateCurrentCharacter = () => {
    getCharacters(this.state.currentPage).then(characters => {
      this.setState({ currentCharacter: characters.results[0] });
    });
  };

  updateCharactersList = () => {
    getCharacters(this.state.currentPage).then(characters => {
      this.setState({ charactersList: characters.results.slice(1, characters.results.length) });
    });
  };

  getNextCharacters = () => {
    const {currentPage, charactersList} = this.state;
    if (currentPage < charactersList.length - 1) {
      this.setState({ currentPage: this.state.currentPage + 1 }, this.updateCharactersList);
    }
  };

  getPreviousCharacters = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 }, this.updateCharactersList);
    }
  };

  onClickListItem = character => this.setState({ currentCharacter: character });

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

  render() {
    const { currentCharacter, charactersList, displayError } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img src="../assets/star_wars_white.png" alt="resistance white logo" height="42" />
          <img src="../assets/resistance-logo.jpg" alt="resistance white logo" height="42" />
          {/* <p>Wookie translator</p> */}
        </div>
        <div className="section1">
          <img src="../assets/star-wars-logo-2.png" alt="resistance white logo" height="110" />
          <SearchBar searchByName={this.searchByName} displayError={displayError} />
        </div>
        <CharacterDetail currentCharacter={currentCharacter} />
        <div className="section3">
          <CharactersList
            charactersList={charactersList}
            onClickListItem={this.onClickListItem}
            next={this.getNextCharacters}
            previous={this.getPreviousCharacters}
          />
        </div>
      </div>
    );
  }
}

export default App;
