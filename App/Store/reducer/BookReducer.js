import {
  ADD_BOOKMARKED_LIST,
  GET_BOOKS,
  REMOVE_BOOKMARKED_LIST,
} from '../actions/BookActions';

const initialState = {
  books: [],
  bookmarks: [],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.data};
    case ADD_BOOKMARKED_LIST:
      return {...state, bookmarks: [...state.bookmarks, action.data]};
    case REMOVE_BOOKMARKED_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(book => book.id !== action.data.id),
      };
    default:
      return state;
  }
}

export default booksReducer;
