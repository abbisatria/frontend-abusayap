import React, { Component } from 'react'
import { Card, Row, Col, Image, Spinner } from 'react-bootstrap'
import ArrowUp from '../../assets/icons/arrow-up.png'
import ArrowDown from '../../assets/icons/arrow-down.png'
import MyChart from '../Chart'

import { connect } from 'react-redux'
import { amountTransaction } from '../../redux/action/transaction'

class TotalTransaction extends Component {
  async componentDidMount () {
    await this.props.amountTransaction(this.props.auth.token, this.props.auth.user.id)
  }
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <Row className="pb-5">
            {this.props.transaction.amountTransaction !== null
              ? <><Col>
              <Image src={ArrowUp} width={28}/>
              <p className="text-xs my-2">Income</p>
              <p className="text-display-xs-bold-18 m-0">{this.props.transaction.amountTransaction[0].income !== null ? `RP ${this.props.transaction.amountTransaction[0].income}` : 'RP 0'}</p>
            </Col>
            <Col>
              <Image src={ArrowDown} width={28}/>
              <p className="text-xs my-2">Expense</p>
              <p className="text-display-xs-bold-18 m-0">{this.props.transaction.amountTransaction[0].expense !== null ? `RP ${this.props.transaction.amountTransaction[0].expense}` : 'RP 0'}</p>
            </Col></>
              : (<Spinner animation="border" variant="success" />)}
          </Row>
          <MyChart />
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  transaction: state.transaction
})

const mapDispatchToProps = { amountTransaction }

export default connect(mapStateToProps, mapDispatchToProps)(TotalTransaction)
