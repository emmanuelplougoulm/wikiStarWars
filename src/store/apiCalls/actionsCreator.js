import { fetchCharacters, searchCharacter } from '../../services/httpClient/people/characters'
import { fetchAPIData } from '../../services/httpClient/shared/shared';
import {
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    SET_CURRENT_CHARACTER,
    SEARCH_CHARACTER,
    SEARCH_CHARACTER_SUCCESS,
    SEARCH_CHARACTER_ERROR,
    GET_ADDITIONNAL_INFOS,
    GET_ADDITIONNAL_INFOS_SUCCESS,
    GET_ADDITIONNAL_INFOS_ERROR,
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

// dont erase this one son 👴

// export const getCharacterPlanet = (homeworld) => {
//     return (dispatch) => {
//         dispatch({ type: GET_PLANET })
//         return getPlanet(homeworld)
//             .then(response => { dispatch({ type: GET_PLANET_SUCCESS, payload: response }) })
//             .catch(error => { dispatch({ type: GET_PLANET_ERROR, payload: error }) })
//     }
// }

export const getInfos = () => {
    return (dispatch, getState) => {
        dispatch({ type: GET_ADDITIONNAL_INFOS });
        return fetchAPIData(getState().apiCalls.currentCharacter)
            .then(response => {
                console.log(response)
                dispatch({ type: GET_ADDITIONNAL_INFOS_SUCCESS, payload: response });
            })
            .catch(error => { dispatch({ type: GET_ADDITIONNAL_INFOS_ERROR, payload: error }) })
    }
}


// const leStateCourantDeRedux = {
//     user: {

//     },
//     drawerIsOpen: true,
//     apiCalls: {
//         currentCharacter: 5
//     }
// }

// const getState = (a) => leStateCourantDeRedux.apiCalls.currentCharacter + a;