import React, { Component } from 'react'
import { Col, Row, Container, Form, Spinner, Alert } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'

import { connect } from 'react-redux'
import { resetPassword } from '../redux/action/auth'

class CreateNewPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    message: '',
    isLoading: false
  }
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  resetPassword = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    const { password, confirmPassword } = this.state
    if (password === confirmPassword) {
      await this.props.resetPassword(this.props.token, password)
      if (this.props.auth.errorMsg === '') {
        this.setState({ isLoading: false })
        this.props.history.push('/login')
      } else {
        this.setState({ isLoading: false })
        this.setState({ message: this.props.auth.errorMsg })
      }
    } else {
      this.setState({ isLoading: false })
      this.setState({ message: 'The password you entered does not match' })
    }
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
              Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>
              {this.state.message !== '' && <Alert variant="danger">{this.state.message}</Alert>}
            <Form onSubmit={this.resetPassword}>
              <FormInput div="py-3" group="inputWithIcon" type="password" name="password" onChange={(event) => this.changeText(event)} placeholder="Enter your password">
                <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              <FormInput div="pb-5" group="inputWithIcon" type="password" name="confirmPassword" onChange={(event) => this.changeText(event)} placeholder="Enter your password">
                <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </FormInput>
              {this.state.isLoading === false
                ? <ButtonCustom block type="submit" >Reset Password</ButtonCustom>
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

const mapDispatchToProps = { resetPassword }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateNewPassword))
