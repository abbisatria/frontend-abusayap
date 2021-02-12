import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom'
import FormInput from '../Form/FormInput'

export default class ChangePassword extends Component {
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Change Password</p>
          <p className="text-sm">You must enter your current password and then <br/> type your new password twice.</p>
          <div className="col-7 mx-auto">
            <Form>
            <FormInput div="py-3" group="inputWithIcon" type="password" placeholder="Enter your password">
              <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
            </FormInput>
            <FormInput group="inputWithIcon" type="password" placeholder="Enter your password">
              <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
            </FormInput>
            <FormInput div="pt-3 pb-5" group="inputWithIcon" type="password" placeholder="Enter your password">
              <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
            </FormInput>
            <Link to='/login'>
              <ButtonCustom block className="btn-custom">
                  Reset Password
              </ButtonCustom>
            </Link>
            </Form>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
