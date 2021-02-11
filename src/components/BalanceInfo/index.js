import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Transfer from '../../assets/images/ArrowUp.png'
import TopUp from '../../assets/images/Plus.png'

export default class index extends Component {
  render () {
    return (

        <Container className="BalanceInfoCard">
          <Row className="w-100 h-100">
            <Col lg={9} className="BalanceInfoCol">
              <div className="BalanceInfoHeader">Balance</div>
              <div className="BalanceInfoAmount">Rp120.000</div>
              <div className="BalanceInfoPhone">+62 813-9387-7946</div>
            </Col>
            <Col className="BalanceInfoCol">
                <Link to="/home-page/transfer" className="BalanceBtnTransfer">
                  <span className="mr-2"><img src={Transfer} alt="TransIcon" /></span>
                  Transfer
                </Link>
                <Link to="/home-page/topup" className="BalanceBtnTransfer">
                  <span className="mr-2"><img src={TopUp} alt="TopUpIcon" /></span>
                  Top Up
                </Link>
            </Col>
          </Row>
        </Container>

    )
  }
}
