import React from "react";
import { charactersPictures } from "../components/CharacterDetail";

const CharacterListItem = props => {
  const { character, onClickListItem } = props;
  // {name} passé en argument équivaut à let name = props.name
  const BASE_IMG_SEARCH = "../assets/";
  const nameSearch = charactersPictures[character.name];

  return (
    <li className="card" onClick={() => onClickListItem(character)}>
      <div className="">
          <img
            className=""
            src={`${BASE_IMG_SEARCH}${nameSearch}`}
            alt=""
            background="white"
            height="250"
            width="200"
          />
      </div>
      <div className="card-info">
        <h6 className="title_list_item">{character.name}</h6>
      </div>
    </li>
  );
};

export default CharacterListItem;
