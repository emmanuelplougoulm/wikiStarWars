import { fetchCharacters, searchCharacter } from '../../services/httpClient/people/characters'
import {
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    SET_CURRENT_CHARACTER,
    SEARCH_CHARACTER,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_ERROR,
    GET_PLANET,
    GET_PLANET_SUCCESS,
    GET_PLANET_ERROR,
    GET_SPECIE,
    GET_SPECIE_SUCCESS,
    GET_SPECIE_ERROR,
    GET_STARSHIP,
    GET_STARSHIP_SUCCESS,
    GET_STARSHIP_ERROR,
    GET_STARSHIPS,
    GET_STARSHIPS_SUCCESS,
    GET_STARSHIPS_ERROR,
} from "./actionsTypes";

export const getCharacters = (indexPage) => {
    return (dispatch, getState) => {
        dispatch({ type: GET_CHARACTERS })
        return fetchCharacters(indexPage)
            .then(response => {
                dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data.results });
                if (Object.keys(getState().apiCalls.currentCharacter).length === 0) {
                    dispatch({ type: SET_CURRENT_CHARACTER, payload: response.data.results[0] })
                }
            })
            .catch(error => dispatch({ type: GET_CHARACTERS_ERROR, payload: error }))
    }
}

export const setCurrentCharacter = currentCharacter => ({ type: SET_CURRENT_CHARACTER, payload: currentCharacter });


export const searchCharacterByName = (searchText) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_CHARACTER })
        return searchCharacter(searchText)
            .then(response => {
                // dispatch({ type: SEARCH_CHARACTER_SUCCESS, payload: response.data.results });
                console.log(response)
                if (response.results && Array.isArray(response.results) && response.results.length > 0) {
                    dispatch({ type: SEARCH_CHARACTER_SUCCESS, payload: response.results[0] })
                }
                else {
                    dispatch({ type: SEARCH_CHARACTER_ERROR })
                }
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: SEARCH_CHARACTER_ERROR })
            })
    }
}






// export const getPlanet = () => ({ type: GET_PLANET });
// export const getSpecie = () => ({ type: GET_SPECIE });
// export const getStarship = () => ({ type: GET_STARSHIP });
// export const getStarships = () => ({ type: GET_STARSHIPS });


