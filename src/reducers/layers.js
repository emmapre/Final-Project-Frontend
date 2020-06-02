import { createSlice } from '@reduxjs/toolkit'

const layerIngredientsData = [
  { name: 'Topping', ingredient1: 'Strawberries', ingredient2: 'Custard' },
  { name: 'Coating', ingredient1: 'Cream', ingredient2: 'Frosting' },
  { name: 'First filling', ingredient1: 'Jam', ingredient2: 'Custard' },
  { name: 'Second filling', ingredient1: 'Jam', ingredient2: 'Custard' },
  { name: 'Sponge', ingredient1: 'Chocolate', ingredient2: 'Vanilla' }
]

export const layers = createSlice({
  name: 'layers',
  initialState: layerIngredientsData
})