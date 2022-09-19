import { combineReducers } from '@reduxjs/toolkit'
import cart from './cart.js'
import barril from './barril.js'

export default combineReducers({ cart, barril })