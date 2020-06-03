import { createSlice } from '@reduxjs/toolkit'

const layerIngredients = [
  { id: 1, name: 'Topping', ingredients: ['Strawberries', 'Blueberries'] },
  { id: 2, name: 'Coating', ingredients: ['Cream', 'Frosting'] },
  { id: 3, name: 'First filling', ingredients: ['Jam', 'Custard'] },
  { id: 4, name: 'Second filling', ingredients: ['Jam', 'Custard'] },
  { id: 5, name: 'Sponge', ingredients: ['Chocolate', 'Vanilla'] }
]

const initialState =
{
  layerIngredients,
  currentLayerIndex: 0,
  chosenIngredients: []
}


export const layers = createSlice({
  name: 'layers',
  initialState
})