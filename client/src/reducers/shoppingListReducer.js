import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, SET_LOADING } from "../actions/types";

export const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return { loading: false, items: action.payload };
    case ADD_ITEM: 
      console.log('add item reducer');
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case REMOVE_ITEM:
      return { loading: false, items: state.items.filter(item => item.id !== action.id)};
    case SET_LOADING:
      return { loading: true, items: state.items };
    default:
      return state;
  };
};