import React, { Component } from 'react'
import { Card, Form, Alert } from 'react-bootstrap'
import ButtonCustom from '../ButtonCustom'
import FormInput from '../Form/FormInput'
import { Formik } from 'formik'

export default class ChangePassword extends Component {
  passwordValidation (values) {
    const errors = {}
    const { password, newPassword, validNewPassword } = values

    if (!password) {
      errors.msg = 'Current Password Required'
    } else if (!newPassword) {
      errors.msg = 'New Password Required'
    } else if (!validNewPassword) {
      errors.msg = 'Repeat your new password'
    } else if (password.length < 8 || newPassword.length < 8 || validNewPassword.length < 8) {
      errors.msg = 'Password have at least 8 characters'
    } else if (password === newPassword) {
      errors.msg = 'Cant same with current password'
    } else if (newPassword !== validNewPassword) {
      errors.msg = 'New password & repeat password not same'
    }
    return errors
  }

  passwordPush (values) {
    console.log(values)
  }
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Change Password</p>
          <p className="text-sm">You must enter your current password and then <br /> type your new password twice.</p>
          <div className="col-7 mx-auto">
            <Formik
              initialValues={{ password: '', newPassword: '', validNewPassword: '' }}
              validate={(values) => this.passwordValidation(values)}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                setTimeout(() => {
                  // disini logicnya puat push
                  // action bisa disini
                  this.passwordPush(values)
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
                <Form onSubmit={handleSubmit}>
                  <FormInput div="py-3" group="inputWithIcon" type="password" placeholder="Enter your password"
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  >
                    <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                  </FormInput>
                  <FormInput group="inputWithIcon" type="password" placeholder="Enter your password"
                    name='newPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPassword}
                  >
                    <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                  </FormInput>
                  <FormInput div="pt-3 pb-5" group="inputWithIcon" type="password" placeholder="Enter your password"
                    name='validNewPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.validNewPassword}
                  >
                    <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
                  </FormInput>
                  {(touched.password && touched.newPassword && touched.validNewPassword) && errors.msg
                    ? <Alert variant='danger'>{errors.msg}</Alert>
                    : null}
                  <ButtonCustom block type="submit" disabled={isSubmitting}>
                    Reset Password
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
