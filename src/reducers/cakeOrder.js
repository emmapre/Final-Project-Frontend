import { createSlice } from '@reduxjs/toolkit'


export const cakeOrder = createSlice({
  name: 'cakeOrder',
  initialState: {
    chosenIngredients: [
      //   //   {
      //   //   topping: {
      //   //     ingredientName: '',
      //   //     ingredientColor: ''
      //   //   }
      //   //   ,
      //   //   coating: {
      //   //     ingredientName: '',
      //   //     ingredientColor: ''
      //   //   },
      //   //   firstLayer: {
      //   //     ingredientName: '',
      //   //     ingredientColor: ''
      //   //   },
      //   //   secondLayer: {
      //   //     ingredientName: '',
      //   //     ingredientColor: ''
      //   //   },
      //   //   sponge: {
      //   //     ingredientName: '',
      //   //     ingredientColor: ''
      //   //   }

      //   // }
    ]
  },
  reducers: {

    addLayerIngredient: (state, action) => {
      console.log(action)
      const existingLayer = state.chosenIngredients.find((chosenIngredients) => chosenIngredients.layerName === action.payload.layerName)

      // state.chosenIngredients.push({ ...action.payload })

      if (existingLayer) {
        // state.existingLayer.filter((existinglayer => existingLayer.existingLayer === existingLayer.layerName))
        state.existingLayer.push({ ...action.payload })
      } else {
        state.chosenIngredients.push({ ...action.payload })
      }
    }
  }
})



// export const submitCakeOrder = (
//   chosenLayers,
//   userId,
//   name,
//   street,
//   postcode,
//   city,
//   telephone,
//   accessToken
// ) => {
//   const SUBMIT_ORDER_URL = 'http://localhost:8080/orders'
//   return (dispatch) => {
//     fetch(SUBMIT_ORDER_URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         items,
//         userId,
//         name,
//         street,
//         postcode,
//         city,
//         telephone
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: accessToken
//       }
//     })
//       .then(() => {
//         dispatch(cart.actions.clearCart())
//       })
//   }
// }