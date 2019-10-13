import { ADD_ITEM, REMOVE_ITEM } from "./types"

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  };
};

const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    item
  }
}