import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import PinInput from 'react-pin-input'

export default class CreatePin extends Component {
  render () {
    return (
      <Row>
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth/>
        </Col>
        <Col md={5} className="p-5">
          <Container>
            <p className="text-display-xs-bold">Secure Your Account, Your Wallet,
and Your Data With 6 Digits PIN
That You Created Yourself.</p>
            <p>
              Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
            <Form>
              <div
                className="d-flex justify-content-center align-content-center pt-4 pb-5">
              <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ borderColor: '#9DA6B5', borderRadius: '10px' }}
                inputFocusStyle={{ borderColor: '#00D16C' }}
                onComplete={(value, index) => {}}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                </div>
              <Link to='/pin-success'>
                <ButtonCustom block >
                    Confirm
                </ButtonCustom>
              </Link>
            </Form>
          </Container>
        </Col>
      </Row>
    )
  }
}
