import React, { Component } from 'react'
import './InputAmount.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import CardContact from '../CardContact'
import FormInputAmount from '../Form/FormInputAmount'
import FormInput from '../Form/FormInput'
import ButtonCustom from '../ButtonCustom'

class index extends Component {
  goToDetailTrans = () => {
    this.props.history.push('/home-page/contact/input-amount/detail-transfer')
  }
  render () {
    return (
      <Container fluid className="InputAmountContainer">
        <Row>
          <Col>
            <div className="InputAmountTitle">Transfer Money</div>
            <div className="my-3">
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
              <i className="fas fa-pen" aria-hidden="true"></i>
              </FormInput>
            </Form>
            <div className="text-right">
              <ButtonCustom onClick={() => this.goToDetailTrans()}>Continue</ButtonCustom>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default withRouter(index)
