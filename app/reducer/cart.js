import { ADD_ITEM } from '../actions/actionTypes'

export default function cart(state = [], action){
  switch(action.type){
    case ADD_ITEM:
      return state.concat(action.payload)
    default:
      return state
  }
}