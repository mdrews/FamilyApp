import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";
import uuid from 'uuid';

const initialState = [
  { id: uuid(), name: 'Milk' },
  { id: uuid(), name: 'Eggs' },
  { id: uuid(), name: 'Steak' },
  { id: uuid(), name: 'Water' },
];

export const shoppingListReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM: 
      return [...state, { id: uuid(), name: action.name }];
    case REMOVE_ITEM:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  };
};