import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom'
import FormInputNumber from '../Form/FormInputNumber'

import './style.scss'

export default class AddPhoneNumber extends Component {
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Add Phone Number</p>
          <p className="text-sm">Add at least one phone number for the transfer <br/> ID so you can start transfering your money to <br/> another user.</p>
          <div className="col-7 mx-auto">
          <Form>
            <FormInputNumber placeholder="Enter your phone number" />
            <ButtonCustom block >
                Add Phone Number
            </ButtonCustom>
          </Form>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
