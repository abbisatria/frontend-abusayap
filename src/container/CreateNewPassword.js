import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'

export default class CreateNewPassword extends Component {
  render () {
    return (
      <Row className="container-fluid">
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth/>
        </Col>
        <Col md={5} className="p-5">
          <Container>
            <p className="text-display-xs-bold">Did You Forgot Your Password?
Don’t Worry, You Can Reset Your
Password In a Minutes.</p>
            <p>
              Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>
            <Form>
              <FormInput div="py-3" group="inputWithIcon" type="password" placeholder="Enter your password">
                <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <FormInput div="pb-5" group="inputWithIcon" type="password" placeholder="Enter your password">
                <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <Link to='/login' className="pt-5">
                <ButtonCustom block >
                    Reset Password
                </ButtonCustom>
              </Link>
            </Form>
          </Container>
        </Col>
      </Row>
    )
  }
}
