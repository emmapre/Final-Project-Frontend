import { createSlice } from '@reduxjs/toolkit'

const layerIngredients = [
  {
    id: 1, name: 'Topping',
    ingredients: [{
      ingredientName: 'Strawberries',
      ingredientColor: 'red'
    }, {
      ingredientName: 'Blueberries',
      ingredientColor: 'blue'
    }]
  },
  {
    id: 2, name: 'Coating',
    ingredients: [{
      ingredientName: 'Cream',
      ingredientColor: 'linen'
    }, {
      ingredientName: 'Frosting',
      ingredientColor: 'palepink'
    }]
  },
  {
    id: 3, name: 'First filling',
    ingredients: [{
      ingredientName: 'Jam',
      ingredientColor: 'maroon'
    },
    {
      ingredientName: 'Custard',
      ingredientColor: 'lightyellow'
    }]
  },
  {
    id: 4, name: 'Second filling',
    ingredients: [{
      ingredientName: 'Jam',
      ingredientColor: 'maroon'
    },
    {
      ingredientName: 'Custard',
      ingredientColor: 'lightyellow'
    }]
  },
  {
    id: 5, name: 'Sponge',
    ingredients: [{
      ingredientName: 'Chocolate',
      ingredientColor: 'brown'
    },
    {
      ingredientName: 'Vanilla',
      ingredientColor: 'bisque'
    }]
  }
]

const initialState =
{
  layerIngredients,
  currentLayerIndex: 0,
}


export const layers = createSlice({
  name: 'layers',
  initialState
})