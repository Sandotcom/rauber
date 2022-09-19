import { ADD_ITEM, DELETE_CART, REMOVE_ITEM, SET_BARRIL } from "./actionTypes"

export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item }
}

export const removeItem = (id) => {
  return { type: REMOVE_ITEM, payload: id }
}

export const deleteCart = () => {
  return { type: DELETE_CART }
}

export const setBarril = (barril) => {
  return { type: SET_BARRIL, payload: barril}
}