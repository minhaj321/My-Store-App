import { createSlice } from '@reduxjs/toolkit'

export const mealsStore = createSlice({
  name: 'mealsInfo',
  initialState: {
    categories : [], 
    favourites: [],
  },
  reducers: {
    addFavourite: (state,categoryInfo) => {
      state.favourites.push(categoryInfo.payload)
    },
    removeFavourite: (state,categoryId) => {
      let catId = categoryId.payload
      let favIndex = state.favourites.findIndex(favourite=>favourite.idCategory!=catId)
      state.favourites.splice(favIndex,1) 
    },
    setCategories: (state,categories) => {
      state.categories = categories.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite, setCategories } = mealsStore.actions

export default mealsStore.reducer