import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './style.scss'

export default class HomeMenu extends Component {
  render () {
    return (
      <Container className="py-3">
        <Router>
          <Row>
            <Col md={3}>
              <Card bg="light" variant="light" className="card-menu">
                <ul>
                  <li>
                    <Link to="/home-page" className="text-menu left-line">Dashboard</Link>
                    <i className="fa fa-th-large fa-lg fa-fw" aria-hidden="true"></i>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/home-page" className="text-menu left-line">Transfer</Link>
                    <i className="fa fa-arrow-up fa-lg fa-fw" aria-hidden="true"></i>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/home-page" className="text-menu left-line">Top Up</Link>
                    <i className="fa fa-plus fa-lg fa-fw" aria-hidden="true"></i>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/home-page" className="text-menu left-line">Profile</Link>
                    <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                  </li>
                </ul>
                <ul className="logout">
                  <li>
                    <Link to="/home-page" className="text-menu left-line">Logout</Link>
                    <i className="fa fa-sign-out-alt fa-lg fa-fw" aria-hidden="true"></i>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
          <Switch>
            <Route exact path="">
              {/* routing component */}
              {/* <DetailInfo /> */}
            </Route>
            <Route path="">
              {/* routing component */}
              {/* <OrderHistory /> */}
            </Route>
          </Switch>
        </Router>
      </Container>
    )
  }
}
