import React, { Component } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import LeftAuth from '../components/LeftAuth'
import FormInput from '../components/Form/FormInput'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, '*Names cant be longer than 100 characters')
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(8, '*Password must have at least 8 characters')
    .required('Password is required')
})

export default class SignUp extends Component {
  signUpPush = async (values) => {
    // nanti kasih reload & push router bisa disini
    console.log(values)
  }
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
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true)

                  setTimeout(() => {
                    // disini logicnya puat push
                    this.signUpPush(values)
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
                    <FormInput div="pt-3" type="text" placeholder="Enter your username"
                      group={`inputWithIcon ${touched.name && errors.name ? 'error' : null}`}
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    >
                      <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                      {touched.name && errors.name
                        ? (<div className="error-message" style={{ color: 'red' }}>{errors.name}</div>)
                        : null}
                    </FormInput>
                    <FormInput div="py-3" type='email' placeholder="Enter your e-mail"
                      group={`inputWithIcon ${touched.email && errors.email ? 'error' : null}`}
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
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
                    >
                      <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                      {touched.password && errors.password
                        ? (<div className="error-message" style={{ color: 'red' }}>{errors.password}</div>)
                        : null}
                    </FormInput>
                    <ButtonCustom block className="btn-custom"
                      type="submit" disabled={isSubmitting}
                    >
                      Sign Up
                  </ButtonCustom>
                    <p className="text-center pt-4">Already have an account? Let’s <Link to='/login'><b>Login</b></Link> </p>
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
