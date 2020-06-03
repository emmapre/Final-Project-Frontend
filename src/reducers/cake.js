import { createSlice } from '@reduxjs/toolkit'


export const cake = createSlice({
  name: 'cake',
  initialState: {
    chosenIngredients: []
  },
  reducers: {
    addLayerIngredient: (state, action) => {
      console.log(action)
      state.chosenIngredients.push({ ...action.payload })
    }
  }
})
