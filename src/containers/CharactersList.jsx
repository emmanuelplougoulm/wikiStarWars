import React from "react";
import CharacterListItem from "../components/CharacterListItem";

const CharactersList = props => {
  const { characters, onClickListItem, next, previous } = props;

  return (
    <div>
      <ul className="charactersList">
        {characters.map(character => {
          return <CharacterListItem key={character.name} character={character} onClickListItem={onClickListItem} />;
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

export default CharactersList;
