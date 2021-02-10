import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/Button'
import FormInputEmail from '../components/Form/FormInputEmail'
import LeftAuth from '../components/LeftAuth'
import RightAuth from '../components/RigthAuth'

export default class Login extends Component {
  render () {
    return (
      <Row>
        <Col md={7} className="d-none d-md-block auth-img p-5">
          <LeftAuth />
        </Col>
        <Col md={5} className="p-5">
          <RightAuth>
            <FormInputEmail type="email" placeholder="Enter your e-mail" />
            <FormInputEmail type="password" placeholder="Enter your password" />
            <Link to='/forgot-password' className="float-right">Forgot password?</Link>
            <Link to='/create-pin'>
              <ButtonCustom block>
                  Login
              </ButtonCustom>
            </Link>
            <p className="text-center">Don’t have an account? Let’s <Link to='/sign-up'>Sign up</Link> </p>
          </RightAuth>
        </Col>
      </Row>
    )
  }
}
