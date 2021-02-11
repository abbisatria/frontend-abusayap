import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BalanceInfo from '../BalanceInfo'
import CardTransHistory from '../CardTransHistory'
import TopUp from '../TopUp'
import TransactionHistory from '../TransactionHistory'
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
                    <Link to="/home-page/topup" className="text-menu left-line">Top Up</Link>
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
            <Col>
              <Switch>
                <Route exact path="/home-page">
                  <BalanceInfo />
                  <Row className="pt-3">
                    <Col md={7}>
                      <CardTransHistory />
                    </Col>
                    <Col>
                      <CardTransHistory />
                    </Col>
                  </Row>
                </Route>
                <Route path="/home-page/topup">
                  <TopUp />
                </Route>
                <Route path="/home-page/transaction-history">
                  <TransactionHistory />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    )
  }
}
