import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
import './style.scss'

class ManagePhoneNumber extends Component {
  gotoAddNumberPhone = () => {
    this.props.history.push('/home-page/profile/personal-info/manage-phone-number/add-phone-number')
  }
  render () {
    const { user } = this.props.auth
    return (
      <Card className="card-menu border-0 shadow-sm">
        <Card.Body>
          <p className="text-display-xs-bold-18">Manage Phone Number</p>
          <p className="text-sm">You can only delete the phone number and then <br/> you must add another phone number.</p>
          <Card className="card-menu border-0 shadow-sm pt-3">
            <Card.Body className="py-0">
              <div className="d-flex justify-content-between pt-3">
                <div onClick={() => this.gotoAddNumberPhone()} className="phone-div">
                  <p className="text-sm mb-1">Primary</p>
                  <p className="text-display-xs-bold-22">{user.phoneNumber}</p>
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps)(ManagePhoneNumber))
