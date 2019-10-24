import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, SET_LOADING } from "../actions/types";
import uuid from 'uuid';

export const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return { loading: false, items: action.payload };
    case ADD_ITEM: 
      return { loading: false, items: [...state.items, { id: uuid(), name: action.name }]};
    case REMOVE_ITEM:
      return { loading: false, items: state.items.filter(item => item.id !== action.id)};
    case SET_LOADING:
      return { loading: true, items: state.items };
    default:
      return state;
  };
};