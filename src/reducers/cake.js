import { createSlice } from '@reduxjs/toolkit'

export const cake = createSlice({
  name: 'cake',
  initialState: {
    cakeLayers: []
  },
  reducers: {
    addLayerIngredient: (state, action) => {
      console.log(action)
    }


  }
})
