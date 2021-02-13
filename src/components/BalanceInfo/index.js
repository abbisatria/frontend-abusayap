import React, { Component } from 'react'
import './index.css'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Transfer from '../../assets/images/ArrowUp.png'
import TopUp from '../../assets/images/Plus.png'

import { connect } from 'react-redux'
import { detailUser } from '../../redux/action/user'

class index extends Component {
  async componentDidMount () {
    await this.props.detailUser(this.props.auth.token, this.props.auth.user.id)
  }
  render () {
    return (
        <Container className="BalanceInfoCard">
          <Row className="w-100 h-100">
            <Col lg={9} className="BalanceInfoCol">
              <div className="BalanceInfoHeader">Balance</div>
              <div className="BalanceInfoAmount">{this.props.user.results !== null ? `Rp. ${this.props.user.results.balance}` : (<Spinner animation="border" variant="light"/>)}</div>
              <div className="BalanceInfoPhone">{this.props.auth.user.phoneNumber !== null ? this.props.auth.user.phoneNumber : 'No PhoneNumber'}</div>
            </Col>
            <Col className="BalanceInfoCol">
                <Link to="/home-page/contact" className="BalanceBtnTransfer">
                  <span className="mr-2"><img src={Transfer} alt="TransIcon" /></span>
                  Transfer
                </Link>
                <Link to="/home-page/topup" className="BalanceBtnTransfer">
                  <span className="mr-2"><img src={TopUp} alt="TopUpIcon" /></span>
                  Top Up
                </Link>
            </Col>
          </Row>
        </Container>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

const mapDispatchToProps = { detailUser }

export default connect(mapStateToProps, mapDispatchToProps)(index)
