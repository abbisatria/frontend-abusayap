import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'

export default class index extends Component {
  // state = {
  //   listTopUp: [
  //     {
  //       id: 1,
  //       detail: 'Go to the nearest ATM or you can use E-Banking.'
  //     },
  //     {
  //       id: 2,
  //       detail: 'Type your security number on the ATM or E-Banking.'
  //     },
  //     {
  //       id: 3,
  //       detail: 'Select “Transfer” in the menu'
  //     },
  //     {
  //       id: 4,
  //       detail: 'Type the virtual account number that we provide you at the top.'
  //     },
  //     {
  //       id: 5,
  //       detail: 'Type the amount of the money you want to top up.'
  //     },
  //     {
  //       id: 6,
  //       detail: 'Read the summary details'
  //     },
  //     {
  //       id: 7,
  //       detail: 'Press transfer / top up'
  //     },
  //     {
  //       id: 8,
  //       detail: 'You can see your money in Zwallet within 3 hours.'
  //     }
  //   ]
  // }
  render () {
    // const { listTopUp } = this.Setstate
    return (
      <div className="TopUpContainer">
        <Container>
          <Row>
            <Col>
              <div className="TopUpTitle">How To Top Up</div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>1</span>
                  Go to the nearest ATM or you can use E-Banking.
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>2</span>
                  Type your security number on the ATM or E-Banking.
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>3</span>
                  Select “Transfer” in the menu
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>4</span>
                  Type the virtual account number that we provide you at the top.
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>5</span>
                  Type the amount of the money you want to top up.
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>6</span>
                  Read the summary details
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>7</span>
                  Press transfer / top up
                </div>
              </div>
              <div className="TopUpCard">
                <div className="TopUpList">
                  <span>8</span>
                  You can see your money in Zwallet within 3 hours.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}
