import "../style/style.css";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CharactersList from "./CharactersList";
import CharacterDetail from "../components/CharacterDetail";
import { getCharacters, updateResearch } from "../services/httpClient/people/characters";
import { connect } from 'react-redux';
import { incrementPagination } from '../store/pagination/actionsCreator/actionsCreator';

class MainPage extends Component {
  state = {
    currentCharacter: {},
    characters: [],
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(newProps) {
    if (this.props.currentPage !== newProps.currentPage) {
      this.updateCharactersList();
    }
  }

  init = () => {
    getCharacters(this.props.currentPage).then(characters => {
      this.setState({
        currentCharacter: characters.results[0],
        characters: characters.results
      });
    });
  };

  updateCurrentCharacter = () => {
    getCharacters(this.props.currentPage)
      .then(characters => this.setState({ currentCharacter: characters.results[0] }));
  };

  updateCharactersList = () => {
    getCharacters(this.props.currentPage)
      .then(characters => this.setState({ characters: characters.results }));
  };

  // getNextCharacters = () => {
  //   const { currentPage, characters } = this.state;
  //   if (characters.length === 10) {
  //     this.setState({ currentPage: this.state.currentPage + 1 }, this.updateCharactersList);
  //   }
  // };

  getPreviousCharacters = () => {
    if (this.props.currentPage > 1) {
      this.setState({ currentPage: this.props.currentPage - 1 }, this.updateCharactersList);
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
    const { currentCharacter, characters, displayError } = this.state;

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
            characters={characters}
            onClickListItem={this.onClickListItem}
            next={this.props.nextPage}
            previous={this.getPreviousCharacters}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  nextPage: () => dispatch(incrementPagination())
});

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

