import React from "react";
import CharacterListItem from "../components/CharacterListItem";

const CharactersList = props => {
  const { charactersList, onClickListItem, next, previous } = props;

  return (
    <div>
      <ul className="charactersList">
        {charactersList.map(character => {
          return <CharacterListItem key={character.name} character={character} onClickListItem={onClickListItem} />;
        })}
      </ul>
      <button className="btn-next" onClick={next}>
        Next
      </button>
      <button className="btn-previous" onClick={previous}>
        Previous
      </button>
    </div>
  );
};

export default CharactersList;
