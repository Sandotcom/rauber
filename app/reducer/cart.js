import { ADD_ITEM, REMOVE_ITEM, SET_CART } from '../actions/actionTypes'

export default function cart(state = [], action){
  switch(action.type){
    case SET_CART:
      return action.payload
    case ADD_ITEM:
      if(state.some((item) => item.id === action.payload.id)){
        return state.map((item) => item.id === action.payload.id
        ? {
          ...item,
          quantity: item.quantity + 1
        } : item)
      }

      return state.concat({...action.payload, quantity: 1 })
    case REMOVE_ITEM:
      let itemToRemove = state.find((item) => item.id === action.payload)

      return itemToRemove.quantity > 1
        ? state.map((item) => item.id === action.payload 
          ? {...item, quantity: item.quantity - 1} : item)
        : state.filter((item) => item.id !== action.payload)
    default:
      return state
  }
}