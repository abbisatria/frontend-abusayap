import React, { Component } from 'react'
import './InputAmount.css'
import { Container, Row, Col } from 'react-bootstrap'
import CardContact from '../CardContact'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="InputAmountContainer">
        <Row>
          <Col>
            <div className="InputAmountTitle">Transfer Money</div>
            <div>
              <CardContact />
            </div>
            <div>
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
