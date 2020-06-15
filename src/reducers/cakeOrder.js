import { createSlice } from '@reduxjs/toolkit'

export const cakeOrder = createSlice({
  name: 'cakeOrder',
  initialState: {
    //makes an array that can contain 5 items
    chosenIngredients: new Array(5)
  },

  reducers: {
    setLayerIngredient: (state, action) => {
      console.log(action)
      // i chosenIngredients på payloadens layerIndex kommer den fulla payloaden skjutas in
      state.chosenIngredients[action.payload.layerIndex] = action.payload
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