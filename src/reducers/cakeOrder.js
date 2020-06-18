import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'


const initialState = {
  //makes an array that can contain 5 items
  chosenIngredients: new Array(5),
}

export const cakeOrder = createSlice({
  name: 'cakeOrder',
  initialState: initialState,
  reducers: {
    setLayerIngredient: (state, action) => {
      console.log(action)
      // i chosenIngredients på payloadens layerIndex kommer den fulla payloaden skjutas in
      state.chosenIngredients[action.payload.layerIndex] = action.payload
    },

    clearCake: () => {
      return initialState
    }
  }
})


export const submitCakeOrder = (

  chosenIngredients,
  userId,
  // name,
  // email,
  accessToken
) => {
  const SUBMIT_ORDER_URL = 'http://localhost:8087/cakeorders'
  return (dispatch) => {
    fetch(SUBMIT_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        chosenIngredients,
        userId,
        // email,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(() => {
        dispatch(cakeOrder.actions.clearCake())
      })
  }
}


export const fetchCakeOrders = () => {
  const CAKEORDER_URL = 'http://localhost:8087/cakeOrders'
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    fetch(CAKEORDER_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(cakeOrder.actions.setCakeOrders(json))
        dispatch(loading.actions.setLoading(false))
      })
  }
}