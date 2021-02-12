import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ButtonCustom from '../components/Button'
import FormInputEmail from '../components/Form/FormInputEmail'
import LeftAuth from '../components/LeftAuth'

export default class ResetPassword extends Component {
  render () {
    return (
      <Row className="container-fluid">
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth />
        </Col>
        <Col md={5} className="p-5">
          <p className="text-title">Did You Forgot Your Password?
Don’t Worry, You Can Reset Your
Password In a Minutes.</p>
          <p className="text-info-app">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
          <FormInputEmail type="email" placeholder="Enter your e-mail"/>
          <ButtonCustom block>Confirm</ButtonCustom>
        </Col>
      </Row>
    )
  }
}
