import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

// FETCH LAYERDATA THUNK
export const fetchLayerIngredients = () => {
  const LAYER_URL = 'https://cakemaker-final-project.herokuapp.com/layers'
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(LAYER_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(layers.actions.setLayers(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const layers = createSlice({
  name: 'layers',
  initialState: {
    layerIngredients: []
  },
  reducers: {
    setLayers: (state, action) => {
      state.layerIngredients = action.payload
    }
  }
})