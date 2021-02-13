import React, { Component } from 'react'
import { Card, Image, Pagination, Form } from 'react-bootstrap'
import FormSearch from '../Form/FormSearch'
// import { Link } from 'react-router-dom'

import listTransfer from '../../utils/listTransfer'
import listSubscription from '../../utils/listSubscription'

export default class TransactionHistory extends Component {
  state = {
    listTransfer,
    listSubscription
  }
  render () {
    const { listTransfer } = this.state
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Transaction History</p>
          <Form className="my-3">
            <FormSearch group="searchIcon" type="text" placeholder="Search receiver here" className="ContactInputSearch">
              <i className="fa fa-search" aria-hidden="true"></i>
            </FormSearch>
          </Form>
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
          <Pagination className="d-flex justify-content-center align-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Card.Body>
      </Card>
    )
  }
}
