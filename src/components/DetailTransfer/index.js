import React, { useState } from 'react'
import './DetailTransfer.css'
import { Container, Row, Col } from 'react-bootstrap'
import CardContact from '../CardContact'
import ButtonCustom from '../ButtonCustom'
import ModalInputPin from '../ModalTransactionInputPin'

function index () {
  const [modalShow, setModalShow] = useState(false)
  const goToResultTransaction = event => {
    this.props.history.push('/home-page/contact/input-amount/result-transaction')
  }
  return (
    <Container fluid className="DetailTransferContainer">
    <Row>
      <Col>
        <div className="DetailTransfer">Transfer To</div>
        <CardContact />
        <div className="DetailTransfer mb-3">Details</div>
        <div className="DetailTransferCard">
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
        <div className="text-right my-4">
          <ButtonCustom onClick={() => setModalShow(true)}>Continue</ButtonCustom>
          <ModalInputPin show={modalShow} onGo={() => goToResultTransaction()} />
        </div>
      </Col>
    </Row>
  </Container>

  )
}

export default index
