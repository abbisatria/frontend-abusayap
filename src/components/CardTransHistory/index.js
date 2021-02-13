import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import listTransfer from '../../utils/listTransfer'
import listSubscription from '../../utils/listSubscription'

import './style.scss'

export default class CardTransHistory extends Component {
  state = {
    listTransfer,
    listSubscription
  }
  render () {
    const { listTransfer } = this.state
    return (
      <Card className="card-menu border-0" style={{ height: '100%' }}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <p className="text-display-xs-bold-18">Transaction History</p>
            <Link to="/home-page/transaction-history" className="text-display-xs-bold-16">see all</Link>
          </div>
          {listTransfer.map((item) => {
            return (
              <div key={item.id}>
                <div className="d-flex justify-content-between pt-3">
                  <div className="d-flex justify-content-center align-content-center">
                      <Image src={item.img} width={56} height={56} className="img-avatar mr-3"/>
                    <div>
                      <p className="text-display-xs-bold-16 mb-2">{item.name}</p>
                      <p className="text-link-xs text-color-label">Transfer</p>
                    </div>
                  </div>
                  <p className="text-right text-primary text-display-xs-bold-16">
                    +Rp {item.total}
                  </p>
                </div>
              </div>
            )
          })}
          {listSubscription.map((item) => {
            return (
              <div key={item.id}>
                <div className="d-flex justify-content-between pt-3">
                  <div className="d-flex justify-content-center align-content-center">
                      <Image src={item.img} width={56} height={56} className="img-avatar mr-3"/>
                    <div>
                      <p className="text-display-xs-bold-16 mb-2">{item.name}</p>
                      <p className="text-link-xs text-color-label">Subscription</p>
                    </div>
                  </div>
                  <p className="text-right text-danger text-display-xs-bold-16">
                    -Rp {item.total}
                  </p>
                </div>
              </div>
            )
          })}
        </Card.Body>
      </Card>
    )
  }
}
