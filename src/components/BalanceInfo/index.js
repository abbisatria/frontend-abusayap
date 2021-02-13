import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Transfer from '../../assets/images/ArrowUp.png'
// import TopUp from '../../assets/images/Plus.png'

export default class index extends Component {
  render () {
    return (
        <Container className="BalanceInfoCard shadow-sm">
          <Row className="w-100 h-100">
            <Col lg={9} className="BalanceInfoCol">
              <div className="BalanceInfoHeader">Balance</div>
              <div className="BalanceInfoAmount">Rp120.000</div>
              <div className="BalanceInfoPhone">+62 813-9387-7946</div>
            </Col>
            <Col className="BalanceInfoCol">
                <Link to="/home-page/contact" className="BalanceBtnTransfer">
                  <svg className="mr-2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 22.1663V5.83301" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.83331 13.9997L14 5.83301L22.1666 13.9997" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  Transfer
                </Link>
                <Link to="/home-page/topup" className="BalanceBtnTransfer">
                  <svg className="mr-2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5.83301V22.1663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.83331 14H22.1666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                  Top Up
                </Link>
            </Col>
          </Row>
        </Container>

    )
  }
}
