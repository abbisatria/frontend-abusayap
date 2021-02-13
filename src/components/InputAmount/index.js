import React, { Component } from 'react'
import './InputAmount.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import CardContact from '../CardContact'
import FormInputAmount from '../Form/FormInputAmount'
import FormInput from '../Form/FormInput'
import { Formik, ErrorMessage } from 'formik'
const errorMessage = {
  color: 'red',
  textAlign: 'center'
}

export default class index extends Component {
  state = {
    amountBelance: 120000
  }

  amountValidation (values) {
    const errors = {}
    const { amountBelance } = this.state // ganti jadi state belancenya ya
    if (!values.amount) {
      errors.amount = 'Amount Required'
    } else if (values.amount > amountBelance) {
      errors.amount = 'Balence not enough'
    } else if (values.amount < 5000) {
      errors.amount = 'Minimun Transfer Rp. 5000'
    }

    if (!values.note) {
      errors.note = 'Notes Required!'
    } else if (values.amount.length < 2) {
      errors.note = 'must have at least 2 characters!'
    }

    return errors
  }

  transaction (values) {
    console.log(values)
  }

  render () {
    return (
      <Container fluid className="InputAmountContainer">
        <Row>
          <Col>
            <div className="InputAmountTitle">Transfer Money</div>
            <div className="my-3">
              <CardContact />
            </div>
            <div className="InputAmountDetail">
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </div>
            <Formik
              initialValues={{ amount: '', note: '' }}
              validate={(values) => this.amountValidation(values)}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                setTimeout(() => {
                  // disini logicnya puat push
                  // action bisa disini
                  this.transaction(values)
                  resetForm()
                  setSubmitting(false)
                }, 500)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form className="my-3" onSubmit={handleSubmit}>
                  <FormInputAmount type="number" placeholder="0.00"
                    group={`amountIcon ${touched.amount && errors.amount ? 'error' : null}`}
                    name='amount'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  <ErrorMessage name="amount" component="div" style={errorMessage} />
                  <div className="InputAmountBalance">Rp120.000 Available</div>
                  <FormInput
                    div="mx-auto col-7 py-5"
                    type="text" placeholder="For buying some socks"
                    group={`inputWithIcon ${touched.note && errors.note ? 'error' : null}`}
                    name='note'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.note}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                      <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg>
                    <ErrorMessage name="note" component="div" style={errorMessage} />
                  </FormInput>
                  <div className="text-right">
                    <Button type="submit" disabled={isSubmitting}>Continue</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    )
  }
}
