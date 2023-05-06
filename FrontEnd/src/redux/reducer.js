import {
  ADD_FAVORITES,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
  GET_FAVORITES,
} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        // aalCharacters es una copia de myFavorites para al momento de filtrar no pisar el original.
        allCharacters: action.payload,
        errors: {},
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.payload,
        errors: {},
        /*
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        */
      };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: state.payload,
        errors: {},
      };

    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(
        (charsFilter) => charsFilter.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    case "ERROR":
      return {
        ...state,
        errors: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
