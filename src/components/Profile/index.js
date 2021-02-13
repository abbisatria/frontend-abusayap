import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Profile.scss'

export default class Profile extends Component {
  render () {
    return (
      <div className="card-profile">
          <img className="img-avatar" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="photo-profile" />
          <div className="change-profile">
            <label>
              <input type="file"/>
              <div className="edit-profile d-flex justify-content-center">
                <i className="fa fa-pencil-alt"/>
                <p>edit</p>
              </div>
            </label>
          </div>
          <h1>Robert Chandler</h1>
          <p>+62 813-9387-7946</p>
          <div className="menu-profile">
            <Link to="/home-page/profile/personal-info" className="card-menu-profile">
              <h2>Personal Info</h2>
              <i className="fa fa-arrow-right"/>
            </Link>
            <Link to="/home-page/profile/change-password" className="card-menu-profile">
              <h2>Change Password</h2>
              <i className="fa fa-arrow-right"/>
            </Link>
            <Link to="/home-page/profile/change-pin" className="card-menu-profile">
              <h2>Change Pin</h2>
              <i className="fa fa-arrow-right"/>
            </Link>
            <button className="card-menu-profile">
              <h2>Logout</h2>
            </button>
          </div>
      </div>
    )
  }
}
