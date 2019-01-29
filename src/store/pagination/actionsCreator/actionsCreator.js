import { INCREMENT_PAGINATION } from '../actionsTypes/actionsTypes';

export const incrementPagination = () => ({ type: INCREMENT_PAGINATION });

// export default decrementPagination = (getNextCharacters) => {
//     return function (dispatch) {
//         getNextCharacters = () => {
//             const { currentPage, characters } = this.state;
//             if (characters.length === 10) {
//                 this.setState({ currentPage: this.state.currentPage + 1 }, this.updateCharactersList);
//             }
//         };
//     }
// }

// const getCharactersAction = (indexPage) => {
//     return function (dispatch) {
//         dispatch({ type: GET_CHARACTERS });
//         return getCharacters(indexPage)
//             .then(characters => dispatch({ type: GET_CHARACTERS_SUCCESS, payload: characters }))
//             .catch(err => dispatch({ type: GET_CHARACTERS_ERROR, payload: err }))
//     }
// }