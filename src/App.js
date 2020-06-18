import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { user } from './reducers/user'
import { cakeOrder } from './reducers/cakeOrder'
import { layers } from './reducers/layers'

import { LandingPage } from './pages/LandingPage'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { InfoPage } from './pages/InfoPage'
import { Latest } from './pages/Latest'
import { OrderPage } from './pages/OrderPage'
import { CakeMakerPage } from './pages/CakeMakerPage'
import { ConfirmationPage } from './pages/ConfirmationPage'

import { Header } from './components/Header'
import { CakeForm } from './components/CakeForm'
// import { OrderForm } from './components/OrderForm'
import styled from 'styled-components/macro'


const reducer = combineReducers({
  cakeOrder: cakeOrder.reducer,
  layers: layers.reducer,
  user: user.reducer,
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/cakemaker' exact>
            <CakeMakerPage />
          </Route>
          <Route path='/latest' exact>
            <Latest />
          </Route>
          <Route path='/info' exact>
            <InfoPage />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
          <Route path='/signin' exact>
            <SignIn />
          </Route>
          <Route path='/order' exact>
            <OrderPage />
          </Route>
          <Route path='/confirmation' exact>
            <ConfirmationPage />
          </Route>
        </Switch>
      </BrowserRouter>

    </Provider >
  )
}
