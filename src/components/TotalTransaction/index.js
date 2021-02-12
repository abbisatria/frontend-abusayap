import React, { Component } from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import ArrowUp from '../../assets/icons/arrow-up.png'
import ArrowDown from '../../assets/icons/arrow-down.png'
import MyChart from '../Chart'

export default class TotalTransaction extends Component {
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <Row className="pb-5">
            <Col>
              <Image src={ArrowUp} width={28}/>
              <p className="text-xs my-2">Income</p>
              <p className="text-display-xs-bold-18 m-0">Rp 120500</p>
            </Col>
            <Col>
              <Image src={ArrowDown} width={28}/>
              <p className="text-xs my-2">Expense</p>
              <p className="text-display-xs-bold-18 m-0">Rp 52000</p>
            </Col>
          </Row>
          <MyChart />
        </Card.Body>
      </Card>
    )
  }
}
