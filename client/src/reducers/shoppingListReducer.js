import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, SET_LOADING } from "../actions/types";

export const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return { loading: false, items: action.payload };
    case ADD_ITEM: 
      console.log(state.items);
      return {
        ...state,
        items: [...state.items.item, action.payload],
        loading: false
      }
    case REMOVE_ITEM:
      console.log(state.items.item);
      return {
        ...state,
        items: [...state.items.item.filter(item => item._id !== action.payload.id)],
        loading: false
      }
      //return { loading: false, items: state.items.filter(item => item.id !== action.id)};
    case SET_LOADING:
      return { loading: true, items: state.items };
    default:
      return state;
  };
};