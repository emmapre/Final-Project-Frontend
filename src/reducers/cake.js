import { createSlice } from '@reduxjs/toolkit'


export const cake = createSlice({
  name: 'cake',
  initialState: {
    chosenIngredients: []
  },
  reducers: {
    addLayerIngredient: (state, action) => {
      console.log(action)
      state.cakeLayers.push({ ...action.payload, quantity: 1 })
    }
  }
})
