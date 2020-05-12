import {
  GET_POST,
  ADD_POST,
  POST_ERROR,
  CLEAR_CURRENT,
  SET_CURRENT,
  LIKE_POST,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // case DELETE_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(
    //       (contact) => contact._id !== action.payload
    //     ),
    //     loading: false,
    //   };
    default:
      return state;
  }
};
