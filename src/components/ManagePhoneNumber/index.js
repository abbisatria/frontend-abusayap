import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './style.scss'

export default class ManagePhoneNumber extends Component {
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Manage Phone Number</p>
          <p className="text-sm">You can only delete the phone number and then <br/> you must add another phone number.</p>
          <Card className="card-menu border-0 shadow-sm pt-3">
            <Card.Body className="py-0">
              <div className="d-flex justify-content-between pt-3">
          <div>
            <p className="text-display-xs-bold-16 mb-2 ">Primary</p>
            <p className="text-link-xs text-color-label float-left">+62 813 9387 7946</p>
          </div>
          <i className="fa fa-trash fa-lg fa-fw d-flex justify-content-center align-items-center" aria-hidden="true"></i>
          </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    )
  }
}
