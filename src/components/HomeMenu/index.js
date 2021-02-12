import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BalanceInfo from '../BalanceInfo'
import Contact from '../Contact'
import InputAmount from '../InputAmount'
import DetailTransaction from '../DetailTransfer'
import Result from '../ResultTransaction'
import TopUp from '../TopUp'
import Profile from '../Profile'
import PersonalInfo from '../PersonalInfo'
import CardTransHistory from '../CardTransHistory'
import ChangePassword from '../ChangePassword'
import TransactionHistory from '../TransactionHistory'
import './style.scss'
import ChangePin from '../ChangePin'
import AddPhoneNumber from '../AddPhoneNumber'
import ManagePhoneNumber from '../ManagePhoneNumber'
import TotalTransaction from '../TotalTransaction'

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
                    <Link to="/home-page/contact" className="text-menu left-line">Transfer</Link>
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
                    <Link to="/home-page/profile" className="text-menu left-line">Profile</Link>
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
                      <TotalTransaction />
                    </Col>
                    <Col>
                      <CardTransHistory />
                    </Col>
                  </Row>
                </Route>
                <Route exact path="/home-page/contact">
                  <Contact />
                </Route>
                <Route exact path="/home-page/contact/input-amount">
                  <InputAmount />
                </Route>
                <Route exact path="/home-page/contact/input-amount/detail-transfer">
                  <DetailTransaction />
                </Route>
                <Route path="/home-page/contact/input-amount/detail-transfer/result-transaction">
                  <Result />
                </Route>
                <Route path="/home-page/topup">
                  <TopUp />
                </Route>
                <Route exact path="/home-page/profile">
                  <Profile />
                </Route>
                <Route exact path="/home-page/profile/personal-info">
                  <PersonalInfo />
                </Route>
                <Route path="/home-page/transaction-history">
                  <TransactionHistory />
                </Route>
                <Route path="/home-page/profile/change-password">
                  <ChangePassword />
                </Route>
                <Route path="/home-page/profile/change-pin">
                  <ChangePin />
                </Route>
                <Route exact path="/home-page/profile/personal-info/manage-phone-number">
                  <ManagePhoneNumber />
                </Route>
                <Route path="/home-page/profile/personal-info/manage-phone-number/add-phone-number">
                  <AddPhoneNumber />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    )
  }
}
