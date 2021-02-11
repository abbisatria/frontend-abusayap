import React, { Component } from 'react'
import HomeMenu from '../components/HomeMenu'
import NavbarHome from '../components/NavbarHome'

export default class Home extends Component {
  render () {
    return (
      <div>
        <NavbarHome />
        <div className="bg-gray">
          <HomeMenu />
        </div>
      </div>
    )
  }
}
