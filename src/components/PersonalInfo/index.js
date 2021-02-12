import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './PersonalInfo.scss'

import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, '*First Names must have at least 2 characters')
    .max(50, '*First name must be less than 50 characters')
    .required('*First name is required'),
  lastname: Yup.string()
    .max(50, '*Last name must be less than 50 characters')
    .notRequired().default(' '),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(50, '*Email must be less than 100 characters')
    .required('*Email is required')
})

export default class PersonalInfo extends Component {
  updatePush (values) {
    console.log(values)
  }
  render () {
    return (
      <div className="card-personal-info">
        <h1>Personal Information</h1>
        <p>
          We got your personal information from the sign <br /> up proccess. If you want to make changes on <br /> your information, contact our support.
        </p>
        <Formik
          initialValues={{ firstname: 'robbert', lastname: 'Chandler', email: 'pewdiepie1@gmail.com' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)

            setTimeout(() => {
              // disini logicnya puat push
              // action bisa disini
              this.updatePush(values)
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
              <div className="form-personal-info">
                <Form.Group >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Write your firtname"
                    // set default value di initial state
                    name='firstname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    isValid={touched.firstname && !errors.firstname}
                  />
                  {touched.firstname && errors.firstname
                    ? (<div className="error-message" style={{ color: 'red' }}>{errors.firstname}</div>)
                    : null}
                </Form.Group>
              </div>
              <div className="form-personal-info">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Write your lastname"
                    name='lastname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    isValid={touched.lastname && !errors.lastname}
                  />
                  {touched.lastname && errors.lastname
                    ? (<div className="error-message" style={{ color: 'red' }}>{errors.lastname}</div>)
                    : null}
                </Form.Group>
              </div>
              <div className="form-personal-info">
                <Form.Group>
                  <Form.Label>Verified E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Write your E-mail"
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isValid={touched.email && !errors.email}
                  />
                  {touched.email && errors.email
                    ? (<div className="error-message" style={{ color: 'red' }}>{errors.email}</div>)
                    : null}
                </Form.Group>
              </div>
              <div className="form-personal-info">
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <div className="d-flex justify-content-between">
                    <Form.Control type="text" defaultValue="+62 813-9387-7946" disabled />
                    <Link to="/home-page/profile/personal-info/manage-phone-number">Manage</Link>
                  </div>
                </Form.Group>
              </div>
              <button className="btn btn-primary px-5"
                type="submit"
                disabled={isSubmitting}
              >Save</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
