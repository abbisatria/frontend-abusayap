import React, { Component } from 'react'
// import PrivateRoute from '../src/config/PrivateRoute'
// import PublicRoute from '../src/config/PublicRoute'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/LoginPage'
import SignUp from '../pages/SignUpPage.js'
import CreatePin from '../pages/CreatePinPage.js'
import ForgotPassword from '../pages/ForgotPasswordPage.js'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          {/* Auth Page */}
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create-pin" component={CreatePin} />
          <Route path="/forgot-password" component={ForgotPassword} />
          {/* Home Page */}
        </Switch>
      </BrowserRouter>

    )
  }
}
