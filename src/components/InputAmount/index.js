import React, { Component } from 'react'
import './InputAmount.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import CardContact from '../CardContact'
import FormInputAmount from '../Form/FormInputAmount'
import FormInput from '../Form/FormInput'
import { Formik, ErrorMessage } from 'formik'
const errorMessage = {
  color: 'red',
  'text-align': 'center'
}

export default class index extends Component {
  state = {
    amountBelance: 120000
  }

  amountValidation (values) {
    const errors = {}
    const { amountBelance } = this.state
    if (!values.amount) {
      errors.amount = 'Amount Required'
    } else if (values.amount < amountBelance) {
      errors.amount = 'Balence not enough'
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
            <div className="my-2">
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
                  <FormInput type="text" placeholder="For buying some socks"
                    group={`inputWithIcon ${touched.note && errors.note ? 'error' : null}`}
                    name='note'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.note}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
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
