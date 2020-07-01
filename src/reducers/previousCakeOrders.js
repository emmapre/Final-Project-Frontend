import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

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
    dispatch(ui.actions.setLoading(true))
    fetch('https://cakemaker-final-project.herokuapp.com/cakeorders')
      .then(res => res.json())
      .then((json) => {
        dispatch(previousCakeOrders.actions.setPreviousCakeOrders(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
