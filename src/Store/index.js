import { configureStore } from '@reduxjs/toolkit'
import MealReducer from './store'

export default configureStore({
  reducer: {
    mealReducer:MealReducer
  },
})