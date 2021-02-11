import React from 'react'
import { Link } from 'react-router-dom'
import ContactFoto from '../../assets/images/ContactProfil.png'
import './CardContact.css'

const CardContact = (props) => {
  // const { data } = props
  return (
    <div>
      <Link to="/home-page/contact/input-amount" className="ContacCard">
        <div className="mr-3">
          <img src={ContactFoto} alt="imgContact" className="imgContact" />
        </div>
        <div>
          <div className="ContacCardName">Samuel Suhi</div>
          <div className="ContacCardNumber">+62 813-8492-9994</div>
        </div>
      </Link>
    </div>
  )
}

export default CardContact
