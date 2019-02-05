import { combineReducers } from "redux";
import * as actionTypes from "./actionsTypes";

const INITIAL_STATE = {
    currentCharacter: {},
    characters: [],
    displayError: false,
    homeworld: {},
    species: [],
    starships: []
};

export const currentCharacter = (state = INITIAL_STATE.currentCharacter, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CHARACTER:
        case actionTypes.SEARCH_CHARACTER_SUCCESS:
            return action.payload;

        case actionTypes.SEARCH_CHARACTER_ERROR:
            return state;

        default:
            return state;
    }
}

export const homeworld = (state = INITIAL_STATE.homeworld, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDITIONNAL_INFOS_SUCCESS:
            return action.payload.homeworld;

        default:
            return state;
    }
}

export const species = (state = INITIAL_STATE.species, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDITIONNAL_INFOS_SUCCESS:
            return action.payload.species;

        default:
            return state;
    }
}

export const starships = (state = INITIAL_STATE.starships, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDITIONNAL_INFOS_SUCCESS:
            return action.payload.starships;

        default:
            return state;
    }
}

export const characters = (state = INITIAL_STATE.characters, action) => {
    switch (action.type) {
        case actionTypes.GET_CHARACTERS_SUCCESS: {
            return action.payload;
        }
        case actionTypes.GET_CHARACTERS_ERROR: {
            return state
        }

        default:
            return state;
    }
}

export const displayError = (state = INITIAL_STATE.displayError, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_CHARACTER_SUCCESS: {
            return false;
        }

        case actionTypes.SEARCH_CHARACTER_ERROR: {
            return true;
        }

        default:
            return state;
    }
}

const apiReducer = combineReducers({
    currentCharacter,
    characters,
    displayError,
    homeworld,
    species,
    starships
});

export default apiReducer;

