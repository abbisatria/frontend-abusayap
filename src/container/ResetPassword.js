import React, { Component } from 'react'
import { Col, Row, Container, Form, Alert, Spinner } from 'react-bootstrap'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'

import { connect } from 'react-redux'
import { forgotPassword } from '../redux/action/auth'

class ResetPassword extends Component {
  state = {
    email: '',
    message: '',
    isLoading: false
  }
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  forgotPassword = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    await this.props.forgotPassword(this.state.email)
    if (this.props.auth.errorMsg === '') {
      this.setState({ message: this.props.auth.message })
    } else {
      this.setState({ message: this.props.auth.errorMsg })
    }
    this.setState({ isLoading: false })
  }
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
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
              {this.state.message !== '' && <Alert variant="danger">{this.state.message}</Alert>}
            <Form onSubmit={this.forgotPassword}>
              <FormInput name="email" div="pt-3 pb-5" onChange={(event) => this.changeText(event)} group="inputWithIcon" type="email" placeholder="Enter your e-mail">
                <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              {this.state.isLoading === false
                ? <ButtonCustom block type="submit" >Confirm</ButtonCustom>
                : (<div className="text-center"><Spinner animation="border" variant="success" /></div>)}
            </Form>
          </Container>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { forgotPassword }

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
