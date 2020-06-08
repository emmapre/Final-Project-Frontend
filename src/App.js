import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from './components/Header'
import { LandingPage } from './pages/LandingPage'
import { CakeForm } from './components/CakeForm'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { InfoPage } from './pages/InfoPage'
import { user } from './reducers/user'

const reducer = combineReducers({
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
            <CakeForm />
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
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
