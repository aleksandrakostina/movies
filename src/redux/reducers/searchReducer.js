import { SET_SEARCH_VALUE } from "../actions";

const initialState = {
  search: ''
};

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.search
      }
    default:
      return state;
  }
}