import { combineReducers } from "redux";
import {
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    SET_CURRENT_CHARACTER,
    SEARCH_CHARACTER,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_ERROR,
    GET_PLANET_SUCCESS,
    GET_PLANET_ERROR,
    GET_SPECIE_SUCCESS,
    GET_SPECIE_ERROR,
    GET_STARSHIP_SUCCESS,
    GET_STARSHIP_ERROR,
    GET_STARSHIPS_SUCCESS,
    GET_STARSHIPS_ERROR,
} from "./actionsTypes";

const INITIAL_STATE = {
    currentCharacter: {},
    characters: [],
    displayError: false,
    // Need to figure out what goes in there son 
};

export const currentCharacter = (state = INITIAL_STATE.currentCharacter, action) => {
    switch (action.type) {
        case SET_CURRENT_CHARACTER:
        case SEARCH_CHARACTER_SUCCESS:
            return action.payload;

        case SEARCH_CHARACTER_ERROR:
            return state;

        default:
            return state;
    }
}

export const characters = (state = INITIAL_STATE.characters, action) => {
    switch (action.type) {
        case GET_CHARACTERS_SUCCESS: {
            return action.payload;
        }

        case GET_CHARACTERS_ERROR: {
            return state
        }

        default:
            return state;
    }
}

// puisque l'on affecte 2 variables comment fait-on pour les mettres dans notre initial state ? 
export const displayError = (state = INITIAL_STATE.displayError, action) => {
    switch (action.type) {
        case SEARCH_CHARACTER_SUCCESS: {
            return false;
        }

        case SEARCH_CHARACTER_ERROR: {
            return true;
        }

        default:
            return state;
    }
}

// export default function apiCalls(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case SET_CURRENT_CHARACTER: {
//             console.log("In reducer", action);
//             return ({
//                 ...state,
//                 currentCharacter: { ...action.payload }
//             });
//         }
//         case GET_CHARACTERS_SUCCESS: {
//             console.log("In reducer", action);
//             return ({
//                 ...state,
//                 characters: action.payload
//             });
//         }
//         case GET_CHARACTERS_ERROR: {
//             return state
//         }
//         // case UPDATE_RESEARCH: {
//         //     return;
//         // }
//         // case GET_PLANET: {
//         //     return;
//         // }
//         // case GET_SPECIE: {
//         //     return;
//         // }
//         // case GET_STARSHIP: {
//         //     return;
//         // }
//         // case GET_STARSHIPS: {
//         //     return;
//         // }
//         default:
//             return state;
//     }
// }

const apiReducer = combineReducers({
    currentCharacter,
    characters,
    displayError
});

export default apiReducer;

