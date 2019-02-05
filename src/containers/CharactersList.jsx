import React from "react";
import { connect } from 'react-redux';
import CharacterListItem from "../components/CharacterListItem";
import { setCurrentCharacter } from "../store/apiCalls/actionsCreator";

const CharactersList = props => {
  const { characters, onClickListItem, next, previous } = props;

  return (
    <div>
      <ul className="charactersList">
        {characters.map(character => {
          return <CharacterListItem key={character.name} character={character} onClick={() => onClickListItem(character)} />;
        })}
      </ul>
      <div className="btn-ctnr">
        <button className="btn-next" onClick={previous}>
          Previous
        </button>
        <button className="btn-next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentCharacter: state.apiCalls.currentCharacter,
  characters: state.apiCalls.characters
});

const mapDispatchToProps = dispatch => ({
  onClickListItem: currentCharacter => dispatch(setCurrentCharacter(currentCharacter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);