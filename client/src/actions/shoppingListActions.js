import axios from 'axios'
import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, SET_LOADING } from "./types"

export const getItems = () => dispatch => {
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
  axios
    .post('/api/items', { name })
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
  )
}

export const removeItem = id => dispatch => {
  dispatch(setItemsLoading());
  console.log(id);
  axios
    .delete(`/api/items/${id}`)
    .then(res => 
      dispatch({
        type: REMOVE_ITEM,
        payload: id
      })
  )
}

export const setItemsLoading = () => {
  return {
    type: SET_LOADING
  }
}