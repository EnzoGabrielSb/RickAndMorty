import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

export const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
