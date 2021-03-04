import { SET_CURRENT_PAGE } from "../actions";

const initialState = {
  currentPage: 1,
  pageLimit: 10
};

export const pageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state;
  }
}