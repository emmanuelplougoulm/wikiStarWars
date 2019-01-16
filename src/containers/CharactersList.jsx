import React from "react";
import CharacterListItem from "../components/CharacterListItem";

const CharactersList = props => {
  const { charactersList, onClickListItem, moreCharacters } = props;

return (
  <div>
     <ul className="charactersList">
        {charactersList.map(character => {
          return <CharacterListItem key={character.name} character={character} onClickListItem={onClickListItem} />;
        })}
      </ul>
      <button className="more-characters" onClick={moreCharacters} >
        More characters
      </button>
  </div>
 
)
};

export default CharactersList;
