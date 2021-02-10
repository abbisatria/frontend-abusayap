import React, { Component } from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap'
import logo from '../../assets/images/abusayap_primary_logo.png'
import bell from '../../assets/icons/bell.png'

import './NavbarHome.scss'

export default class NavbarHome extends Component {
  render () {
    return (
      <Navbar bg="light" variant="light" className="nav-home">
        <Container>
          <Navbar.Brand>
          <Image src={logo} height={40} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Image
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              height={52}
              className="img-profile-small"
            />
          </Nav.Link>
          <Nav.Link>
            <p className="m-0 text-phone-small">Robert Chandler</p>
            <p className="m-0">+62 8139 3877 7946</p>
          </Nav.Link>
          <Nav.Link>
            <Image src={bell} height={24} />
          </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
  }
}
