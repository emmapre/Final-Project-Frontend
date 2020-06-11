import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

// FETCH LAYERDATA THUNK
export const fetchLayerIngredients = () => {
  const LAYER_URL = 'http://localhost:8087/layers'
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true))
    fetch(LAYER_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(layers.actions.setLayers(json))
        dispatch(loading.actions.setLoading(false))
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