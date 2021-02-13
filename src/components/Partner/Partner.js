import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import './Partner.css'
import Microsoft from '../../assets/images/Microsoft.png'
import Dropbox from '../../assets/images/Dropbox.png'
import Hm from '../../assets/images/Hm.png'
import Airbnb from '../../assets/images/Airbnb.png'
import Canon from '../../assets/images/Canon.png'
import Dell from '../../assets/images/Dell.png'

export default class index extends Component {
  render () {
    return (
      <Container fluid>
        <Row className="PartnerRow">
          <div>
            <img src={Microsoft} alt="Microsoft" className="img-fluid" />
          </div>
          <div>
            <img src={Dropbox} alt="Dropbox" className="img-fluid" />
          </div>
          <div>
            <img src={Hm} alt="H&M" className="img-fluid" />
          </div>
          <div>
            <img src={Airbnb} alt="Airbnb" className="img-fluid pt-3" />
          </div>
          <div>
            <img src={Canon} alt="Canon" className="img-fluid pt-4" />
          </div>
          <div>
            <img src={Dell} alt="Dell" className="img-fluid" />
          </div>
        </Row>
      </Container>
    )
  }
}
