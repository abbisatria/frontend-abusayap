import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './PersonalInfo.scss'

export default class PersonalInfo extends Component {
  render () {
    return (
      <div className="card-personal-info">
        <h1>Personal Information</h1>
        <p>
          We got your personal information from the sign <br/> up proccess. If you want to make changes on <br/> your information, contact our support.
        </p>
        <Form>
          <div className="form-personal-info">
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Write your firtname" defaultValue="Robert" />
            </Form.Group>
          </div>
          <div className="form-personal-info">
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Write your lastname" defaultValue="Chandler" />
            </Form.Group>
          </div>
          <div className="form-personal-info">
            <Form.Group>
              <Form.Label>Verified E-mail</Form.Label>
              <Form.Control type="email" placeholder="Write your E-mail" defaultValue="pewdiepie1@gmail.com" />
            </Form.Group>
          </div>
          <div className="form-personal-info">
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Control type="text" defaultValue="+62 813-9387-7946" disabled />
                <Link to="/home-page/profile/personal-info/phone-number">Manage</Link>
              </div>
            </Form.Group>
          </div>
          <button className="btn btn-primary px-5">Save</button>
        </Form>
      </div>
    )
  }
}
