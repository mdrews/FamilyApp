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

export const addItem = name => dispatch => {
  dispatch(setItemsLoading());
  console.log('api add item');
  console.log(name);
  axios
    .post('/api/items', { name })
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    );
};

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