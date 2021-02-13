import React, { Component } from 'react'
import PrivateRoute from './PrivateRoute'
import { Provider } from 'react-redux'
import persistedStore from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
// import PublicRoute from '../src/config/PublicRoute'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/LoginPage'
import SignUp from '../pages/SignUpPage'
import CreatePin from '../pages/CreatePinPage'
import ResetPassword from '../pages/ResetPasswordPage'
import LandingPage from '../pages/LandingPage'
import Home from '../pages/HomePage'
import Pin from '../pages/PinSuccessPage'
import CreateNewPassword from '../pages/CreateNewPasswordPage'

export default class App extends Component {
  render () {
    const { store, persistor } = persistedStore()
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/create-pin/:id" component={CreatePin} />
              <Route path="/reset-password" component={ResetPassword} />
              <PrivateRoute path="/home-page" privateComponent={Home} />
              <Route path="/pin-success" component={Pin} />
              <Route path="/create-new-password/:token" component={CreateNewPassword} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    )
  }
}
