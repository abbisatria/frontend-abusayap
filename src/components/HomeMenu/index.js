import React, { Component } from 'react'
import { Col, ListGroup, Tab, Row, Container } from 'react-bootstrap'

import './HomeMenu.scss'

export default class HomeMenu extends Component {
  render () {
    return (
      <Container>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Dashboard
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Transfer
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Top Up
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Profile
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                  Logout
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <p>dawdwwd</p>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <p>dwadwawaddwa</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
