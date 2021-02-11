import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/Button'
import LeftAuth from '../components/LeftAuth'
import PinInput from 'react-pin-input'

export default class CreatePin extends Component {
  render () {
    return (
      <Row>
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth />
        </Col>
        <Col md={5} className="p-5">
          <p className="text-title">Secure Your Account, Your Wallet,
          and Your Data With 6 Digits PIN
          That You Created Yourself.</p>
          <p className="text-info-app">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
          <div className="d-flex justify-content-center align-items-center">
          <PinInput
            length={6}
            initialValue=""
            secret
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px' }}
            inputStyle={{ borderColor: 'red' }}
            inputFocusStyle={{ borderColor: 'blue' }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <Link to='/home-page'>
              <ButtonCustom block>
                  Confirm
              </ButtonCustom>
          </Link>
        </Col>
      </Row>
    )
  }
}
