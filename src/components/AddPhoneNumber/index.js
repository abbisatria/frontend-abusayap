import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom'
import FormInputNumber from '../Form/FormInputNumber'

import './style.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(9, '*Phone number must have at least 9 characters')
    .max(15, '*Phone number cant be longer than 10 characters')
    .required('*Name is required')
})

export default class AddPhoneNumber extends Component {
  phoneNumberPush = async (values) => {
    // action bisa disini
    console.log(values)
  }
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Add Phone Number</p>
          <p className="text-sm">Add at least one phone number for the transfer <br /> ID so you can start transfering your money to <br /> another user.</p>
          <div className="col-7 mx-auto">
            <Formik
              initialValues={{ phoneNumber: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)

                setTimeout(() => {
                  // disini logicnya puat push
                  // action bisa disini
                  this.phoneNumberPush(values)
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
                  <FormInputNumber type="number" placeholder="Enter your phone number"
                    name='phoneNumber'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    isValid={touched.phoneNumber && !errors.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber
                    ? (<div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>{errors.phoneNumber}</div>)
                    : null}
                  <ButtonCustom block type="submit" disabled={isSubmitting}>
                    Add Phone Number
                  </ButtonCustom>
                </Form>
              )}
            </Formik>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
