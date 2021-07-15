export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOKMARKED_LIST = 'ADD_BOOKMARKED_LIST';
export const REMOVE_BOOKMARKED_LIST = 'REMOVE_BOOKMARKED_LIST';

import axios from 'axios';
import {BASE_URL} from '../../config';

export const getBook = () => {
  try {
    return async dispatch => {
      await axios
        .get(`${BASE_URL}`)
        .then(response => {
          dispatch({
            type: GET_BOOKS,
            data: response.data,
          });
        })
        .catch(err => console.log(err));
    };
  } catch (err) {
    console.log(err);
  }
};

export const addToBookmark = book => dispatch => {
  dispatch({
    type: ADD_BOOKMARKED_LIST,
    data: book,
  });
};

export const removeFromBookmark = book => dispatch => {
  dispatch({
    type: REMOVE_BOOKMARKED_LIST,
    data: book,
  });
};
