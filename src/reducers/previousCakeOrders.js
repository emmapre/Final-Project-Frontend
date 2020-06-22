import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

//FETCH PREVIOUS CAKES THUNK
export const previousCakeOrders = createSlice({
  name: 'previousCakeOrders',
  initialState: {
    allCakeOrders: []
  },
  reducers: {
    setPreviousCakeOrders: (state, action) => {
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
        dispatch(previousCakeOrders.actions.setPreviousCakeOrders(json))
        dispatch(loading.actions.setLoading(false))
      })
  }
}
