import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, SET_LOADING } from "./types"

export const getItems = () => dispatch => {
  console.log('get-action');
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
}

export const addItem = (name) => {
  return {
    type: ADD_ITEM,
    name
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export const setItemsLoading = () => {
  return {
    type: SET_LOADING
  }
}