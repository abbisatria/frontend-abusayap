import React, { Component } from 'react'
import { Card, Image, Pagination, Form } from 'react-bootstrap'
import FormSearch from '../Form/FormSearch'
import defaultProfile from '../../assets/images/default-image.png'

import { connect } from 'react-redux'
import { transactionHistory } from '../../redux/action/transaction'

class TransactionHistory extends Component {
  state = {
    search: ''
  }
  async componentDidMount () {
    await this.props.transactionHistory(this.props.auth.token)
  }
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value }, async () => {
      await this.props.transactionHistory(this.props.auth.token, this.state.search)
    })
  }
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Transaction History</p>
          <Form className="my-3">
            <FormSearch group="searchIcon" type="text" name="search" onChange={(event) => this.changeText(event)} placeholder="Search receiver here" className="ContactInputSearch">
              <i className="fa fa-search" aria-hidden="true"></i>
            </FormSearch>
          </Form>
          <div id="scrollmenu">
            {this.props.transaction.transactionHistory
              ? this.props.transaction.transactionHistory.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="d-flex justify-content-between pt-3">
                      <div className="d-flex justify-content-center align-content-center">
                          <Image src={item.picture ? `http://localhost:5000/upload/profile/${item.picture}` : defaultProfile} width={56} height={56} className="img-avatar mr-3"/>
                        <div>
                          <p className="text-display-xs-bold-16 mb-2">{item.name}</p>
                          <p className="text-link-xs text-color-label">{item.status}</p>
                        </div>
                      </div>
                      <p className="text-right text-primary text-display-xs-bold-16">
                        +Rp {item.amount}
                      </p>
                    </div>
                  </div>
                )
              })
              : 'No Transaction'}
          </div>
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

const mapStateToProps = state => ({
  auth: state.auth,
  transaction: state.transaction
})

const mapDispatchToProps = { transactionHistory }

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
