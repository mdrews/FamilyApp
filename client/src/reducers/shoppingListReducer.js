import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";
import uuid from 'uuid';

export const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case ADD_ITEM: 
      return [...state, { id: uuid(), name: action.name }];
    case REMOVE_ITEM:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  };
};