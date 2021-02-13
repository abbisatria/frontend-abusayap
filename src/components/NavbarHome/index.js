import React, { Component } from 'react'
import { Navbar, Nav, Image, Container, DropdownButton, Media } from 'react-bootstrap'
import logo from '../../assets/images/abusayap_primary_logo.png'
// import bell from '../../assets/icons/bell.png'
import CardNotif from '../CardNotif'

import './NavbarHome.scss'

export default class NavbarHome extends Component {
  render () {
    return (
      <Navbar className="nav-home">
        <Container>
          <Navbar.Brand>
          <Image src={logo} height={40} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Media>
              <Image
                width={52}
                height={52}
                className="mr-3 img-avatar"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Generic placeholder"
              />
              <Media.Body>
                <p className="mb-1 text-display-xs-bold-18">Robert Chandler</p>
                <p className="m-0 text-xs">
                  +62 8139 3877 7946
                </p>
              </Media.Body>
            </Media>
          </Nav.Link>
          <DropdownButton
            menuAlign="right"
            className="pt-3"
            title={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
              </svg>
            }
            variant="light"
          >
            <CardNotif />
          </DropdownButton>
        </Nav>
        </Container>
      </Navbar>
    )
  }
}
