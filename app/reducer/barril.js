import { SET_BARRIL } from "../actions/actionTypes";

export default function barril(state = {}, action){
  switch(action.type){
    case SET_BARRIL:
      return action.payload
    default:
      return state
  }
}