import "../style/style.css";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CharactersList from "./CharactersList";
import CharacterDetail from "../components/CharacterDetail";
import { connect } from 'react-redux';
import { incrementPagination, decrementPagination } from '../store/pagination/actionsCreator';
import { getCharacters } from '../store/apiCalls/actionsCreator';

class MainPage extends Component {

  componentDidMount() {
    this.props.getCharacters(this.props.currentPage);
  }

  componentDidUpdate(newProps) {
    if (this.props.currentPage !== newProps.currentPage) {
      this.props.getCharacters(this.props.currentPage);
    }
  }

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
          <SearchBar />
        </div>
        <CharacterDetail />
        <div className="section3">
          <CharactersList
            next={this.props.next}
            previous={this.props.previous}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  characters: state.apiCalls.characters,
  currentCharacter: state.apiCalls.currentCharacter,
  displayError: state.apiCalls.displayError
});

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(incrementPagination()),
  previous: () => dispatch(decrementPagination()),
  getCharacters: indexPage => dispatch(getCharacters(indexPage)),
});

// const enhance = connect(mapStateToProps, mapDispatchToProps);
// const EnhancedComponent = enhance(MainPage);
// export default EnhancedComponent;

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

