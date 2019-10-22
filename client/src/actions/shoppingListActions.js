import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS } from "./types"

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

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