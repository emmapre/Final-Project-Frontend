import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from './components/Header'
import { CakeForm } from './components/CakeForm'
// import { OrderForm } from './components/OrderForm'
import { CakePreview } from './components/CakePreview'

import { cake } from './reducers/cake'
import { layers } from './reducers/layers'

const reducer = combineReducers({
  cake: cake.reducer,
  layers: layers.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>

      <Header />
      <CakeForm />
      <CakePreview />
    </Provider>
  )
}
