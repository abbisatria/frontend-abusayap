import React, { Component } from 'react'
import { Navbar, Nav, Image, Container, DropdownButton } from 'react-bootstrap'
import logo from '../../assets/images/abusayap_primary_logo.png'
import bell from '../../assets/icons/bell.png'
import CardNotif from '../CardNotif'
import { connect } from 'react-redux'

import './NavbarHome.scss'

class NavbarHome extends Component {
  render () {
    return (
      <Navbar className="nav-home">
        <Container>
          <Navbar.Brand>
          <Image src={logo} height={40} />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Image
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              height={52}
              className="img-avatar"
            />
          </Nav.Link>
          <Nav.Link>
            <p className="m-0 text-phone-small">{`${this.props.auth.user.firstname} ${this.props.auth.user.lastname}`}</p>
            <p className="m-0">+62 8139 3877 7946</p>
          </Nav.Link>
          <DropdownButton
            menuAlign="right"
            title={<Image src={bell} height={24} />}
            variant="transparent"
          >
            <CardNotif />
          </DropdownButton>
        </Nav>
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(NavbarHome)
