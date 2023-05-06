import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

/*
export const addFavorites =  (character) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/favorites", character)
      .then((response) => {
        return dispatch({
          type: ADD_FAVORITES,
          payload: response.data,
        });
      });
  };
};
*/

export const addFavorites = (character) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/favorites",
        character
      );
      return dispatch({
        type: ADD_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/favorites/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/favorites"
      );
      return dispatch({
        type: "GET_FAVORITES",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
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
