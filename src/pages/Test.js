import React, { Component } from 'react'
import TopUp from '../components/TopUp/index'
import BalanceInfo from '../components/BalanceInfo/index'

export default class Test extends Component {
  render () {
    return (
      <div>
        <TopUp />
        <BalanceInfo />
      </div>
    )
  }
}
