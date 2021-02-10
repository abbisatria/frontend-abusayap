import React, { Component } from 'react'
// import PrivateRoute from '../src/config/PrivateRoute'
// import PublicRoute from '../src/config/PublicRoute'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />

        </Switch>

      </BrowserRouter>

    )
  }
}
