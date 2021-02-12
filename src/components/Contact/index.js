import React, { Component } from 'react'
import './Contact.css'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import FormSearch from '../Form/FormSearch'
import CardContact from '../CardContact'

class index extends Component {
  goToTransaction = () => {
    this.props.history.push('/home-page/contact/input-amount')
  }
  render () {
    return (
      <Container fluid className="ContactContainer">
        <Row>
          <Col>
            <div className="ContacTitle">Search Receiver</div>
            <Form className="my-3">
              <FormSearch group="searchIcon" type="text" placeholder="Search receiver here">
                <i className="fa fa-search" aria-hidden="true"></i>
              </FormSearch>
            </Form>
            <div>
              <CardContact onClick={() => this.goToTransaction()} />
              <CardContact onClick={() => this.goToTransaction()} />
              <CardContact onClick={() => this.goToTransaction()} />
              <CardContact onClick={() => this.goToTransaction()} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default withRouter(index)
