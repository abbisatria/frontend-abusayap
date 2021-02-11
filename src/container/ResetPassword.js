import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'

export default class ResetPassword extends Component {
  render () {
    return (
      <Row>
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth/>
        </Col>
        <Col md={5} className="p-5">
          <Container>
            <p className="text-display-xs-bold">Did You Forgot Your Password?
Don’t Worry, You Can Reset Your
Password In a Minutes.</p>
            <p>
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
            <Form>
              <FormInput div="pt-3 pb-5" group="inputWithIcon" type="email" placeholder="Enter your e-mail">
                <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <Link to='/create-new-password' className="pt-5">
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
