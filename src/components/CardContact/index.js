import React from 'react'
import ContactFoto from '../../assets/images/ContactProfil.png'
import './CardContact.css'

const CardContact = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className="ContacCard">
        <div className="mr-3">
          <img src={ContactFoto} alt="imgContact" className="imgContact" />
        </div>
        <div>
          <div className="ContacCardName">Samuel Suhi</div>
          <div className="ContacCardNumber">+62 813-8492-9994</div>
        </div>
      </div>
    </div>
  )
}

export default CardContact
