import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { CakeForm } from './components/CakeForm'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { InfoPage } from './pages/InfoPage'


export const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Switch>
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
    </div>
  )
}
