import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'

export default class Login extends Component {
  render () {
    return (
      <Row>
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth/>
        </Col>
        <Col md={5} className="p-5">
          <Container>
            <p className="text-display-xs-bold">Start Accessing Banking Needs
              With All Devices and All Platforms
              With 30.000+ Users</p>
            <p>
              Transfering money is eassier than ever, you can access Zwallet wherever you are.
              Desktop, laptop, mobile phone? we cover all of that for you!
            </p>
            <Form>
              <FormInput div="py-3" group="inputWithIcon" type="email" placeholder="Enter your e-mail">
                <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <FormInput group="inputWithIcon" type="password" placeholder="Enter your password">
                <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <Link to='/reset-password' className="float-right text-secondary text-link-xs pb-5">Forgot password?</Link>
              <Link to='/create-pin' className="pt-5">
                <ButtonCustom block className="btn-custom">
                    Login
                </ButtonCustom>
              </Link>
              <p className="text-center pt-4">Don’t have an account? Let’s <Link to='/sign-up'><b>Sign up</b></Link> </p>
            </Form>
          </Container>
        </Col>
      </Row>
    )
  }
}
