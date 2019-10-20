import { ADD_ITEM, REMOVE_ITEM } from "./types"

export const addItem = (name) => {
  console.log('add!');
  console.log();
  return {
    type: ADD_ITEM,
    name
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}