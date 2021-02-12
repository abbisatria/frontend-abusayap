import React, { Component } from 'react'
import './InputAmount.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import CardContact from '../CardContact'
import FormInputAmount from '../Form/FormInputAmount'
import FormInput from '../Form/FormInput'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="InputAmountContainer">
        <Row>
          <Col>
            <div className="InputAmountTitle">Transfer Money</div>
            <div className="my-2">
              <CardContact />
            </div>
            <div className="InputAmountDetail">
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </div>
            <Form className="my-3">
              <FormInputAmount group="amountIcon" type="text" placeholder="0.00">
              </FormInputAmount>
            </Form>
            <div className="InputAmountBalance">Rp120.000 Available</div>
            <Form className="my-3">
              <FormInput group="inputWithIcon" type="text" placeholder="For buying some socks">
              <i className="fa fa-pencil" aria-hidden="true"></i>
              </FormInput>
            </Form>
            <div className="text-right">
              <Button>Continue</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
