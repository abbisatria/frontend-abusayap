import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Jumbotron.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import AppDisplay from '../../assets/images/phone.png'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="Hero">
        <Row>
          <Col md>
            <div className="HeroLogo">
              <img src={Logo} alt="LogoAbusayap" className="HeroAbusayap" />
            </div>
            <div className="HeroAwesomeApp">
              Awesome App <br />For Saving Time.
            </div>
            <div className="HeroDescription">
              We bring you a mobile app for banking problems that <br />
              oftenly wasting much of your times.
            </div>
            <div className="HeroDescription">
              <Button variant="light" className="HeroBtnTry">Try it Free</Button>{' '}
            </div>
          </Col>
          <Col md>
            <div className="HeroLogo text-right">
              <Link to="/login"><Button variant="light" className="HeroBtnLogin">Login</Button></Link>
              <Link to="/sign-up"><Button variant="light" className="HeroBtnSignUp">Sign Up</Button></Link>
            </div>
            <div className="text-left">
              <img src={AppDisplay} alt="appDisplay" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
