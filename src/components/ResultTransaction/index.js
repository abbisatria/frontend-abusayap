import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import CardContact from '../CardContact'
// import SuccessTransaction from '../SuccesTransaction/SuccesComponent'
import FailedTransaction from '../FailedTransaction/FailedComponent'
// import FailedButton from '../FailedTransaction/FailedButton'
import SuccessButton from '../SuccesTransaction/SuccesButton'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="ResultTransferContainer">
        <Row>
          <Col>
            <div>
              <FailedTransaction />
              {/* <SuccessTransaction /> */}
            </div>

            <div className="DetailTransferCard mt-5">
              <div className="DetailTransferHeader">Amount</div>
              <div className="DetailTransferFill">Rp100.000</div>
            </div>
            <div className="DetailTransferCard">
              <div className="DetailTransferHeader">Balance Left</div>
              <div className="DetailTransferFill">Rp20.000</div>
            </div>
            <div className="DetailTransferCard">
              <div className="DetailTransferHeader">Date & Time</div>
              <div className="DetailTransferFill">May 11, 2020 - 12.20</div>
            </div>
            <div className="DetailTransferCard">
              <div className="DetailTransferHeader">Notes</div>
              <div className="DetailTransferFill">For buying some socks</div>
            </div>
            <div className="DetailTransfer mt-4">Transfer To</div>
            <CardContact />
            <div className="mt-5">
              {/* <FailedButton /> */}
              <SuccessButton />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
