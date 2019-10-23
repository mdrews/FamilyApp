import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS } from "../actions/types";
import uuid from 'uuid';

export const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return { loading: false, items: state.items };
    case ADD_ITEM: 
      return { loading: false, items: [...state.items, { id: uuid(), name: action.name }]};
    case REMOVE_ITEM:
      return { loading: false, items: state.items.filter(item => item.id !== action.id)};
    default:
      return state;
  };
};