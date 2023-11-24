// themeReducer.js
import { ActionTypes } from "../actionTypes/todoTypes";
const initialState = {
  theme: "#fff",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
  
      return {...state,theme: action.payload};
    

    default:
      return state;
  }
};

export default themeReducer;