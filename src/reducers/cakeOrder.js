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
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      console.log(`Error Message: ${errorMessage}`)
      state.signin.errorMessage = errorMessage
    },
    clearCake: () => {
      return initialState
    }
  }
})


export const submitCakeOrder = (
  chosenIngredients,
  userId,
  accessToken
) => {
  const SUBMIT_ORDER_URL = 'http://localhost:8087/cakeorders'
  return (dispatch) => {
    fetch(SUBMIT_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        chosenIngredients,
        userId,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(() => {
        dispatch(cakeOrder.actions.clearCake())
      })
      .catch((err) => {
        dispatch(cakeOrder.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}


//FETCH PREVIOUS CAKES THUNK
export const cakeOrders = createSlice({
  name: 'cakeOrders',
  initialState: {
    allCakeOrders: []
  },
  reducers: {
    setCakeOrders: (state, action) => {
      state.allCakeOrders = action.payload
    }
  }
})

export const fetchCakeOrders = () => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    fetch('http://localhost:8087/cakeorders')
      .then(res => res.json())
      .then((json) => {
        dispatch(cakeOrders.actions.setCakeOrders(json))
        dispatch(loading.actions.setLoading(false))
      })
  }
}
