import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'
import { login } from '../redux/action/auth'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(8, '*Password must have at least 8 characters')
    .required('Password is required')
})

class Login extends Component {
  loginPush = async (values) => {
    await this.props.login(values.email, values.password)
    // if (this.props.auth.token) {
    //   this.props.history.push('/home-page')
    // }
    // console.log(values.email)
  }
  // componentDidUpdate () {
  //   console.log(this.props.location)
  //   if (this.props.auth.token) {
  //     if (this.props.auth.user.role === 1) {
  //       if (this.props.location.state === undefined) {
  //         this.props.history.push('/admin')
  //       } else {
  //         this.props.history.push((this.props.location.state.from && this.props.location.state.from.pathname))
  //       }
  //     } else {
  //       if (this.props.location.state === undefined) {
  //         this.props.history.push('/home-page')
  //       } else {
  //         this.props.history.push((this.props.location.state.from && this.props.location.state.from.pathname))
  //       }
  //     }
  //   }
  // }
  render () {
    return (
      <div className='container-fluid'>
        <Row>
          <Col md={7} className="d-none d-md-block auth-img p-5">
            <LeftAuth />
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
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={ (values, { setSubmitting, resetForm }) => {
                  setSubmitting(true)
                  // await this.loginPush(values)
                  // resetForm()
                  // resetForm()
                  // setSubmitting(false)
                  setTimeout(() => {
                    // disini logicnya puat push
                    // action bisa disini
                    this.loginPush(values)
                    if (this.props.auth.token) {
                      this.props.history.push('/home-page')
                    }
                    // this.loginPush(values)
                    resetForm()
                    setSubmitting(false)
                  }, 500)
                }}
              >
                {(
                  {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormInput div="py-3" type='email' placeholder="Enter your e-mail"
                      controlId="validationFormik01"
                      group={`inputWithIcon ${touched.email && errors.email ? 'error' : null}`}
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      isValid={touched.email && !errors.email}
                    >
                      <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                      {touched.email && errors.email
                        ? (<div className="error-message" style={{ color: 'red' }}>{errors.email}</div>)
                        : null}
                    </FormInput>
                    <FormInput div="pb-5" type="password" placeholder="Enter your password"
                      group={`inputWithIcon ${touched.password && errors.password ? 'error' : null}`}
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      isValid={touched.password && !errors.password}
                    >
                      <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                      {touched.password && errors.password
                        ? (<div className="error-message" style={{ color: 'red' }}>{errors.password}</div>)
                        : null}
                    </FormInput>
                    <ButtonCustom block className="btn-custom"
                      type="submit" disabled={isSubmitting}
                    >
                      Login
                  </ButtonCustom>
                    <p className="text-center pt-4">Don’t have an account? Let’s <Link to='/sign-up'><b>Sign Up</b></Link> </p>
                  </Form>
                )}
              </Formik>
            </Container>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
