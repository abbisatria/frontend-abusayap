import React, { Component } from 'react'
import './Contact.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import FormSearch from '../Form/FormSearch'
import CardContact from '../CardContact'

export default class index extends Component {
  render () {
    return (
      <Container fluid className="ContactContainer">
        <Row>
          <Col>
            <div className="ContacTitle">Search Receiver</div>
            <Form className="my-3">
              <FormSearch group="searchIcon" type="text" placeholder="Search receiver here" className="ContactInputSearch">
                <i className="fa fa-search" aria-hidden="true"></i>
              </FormSearch>
            </Form>
            <div>
              <CardContact />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
