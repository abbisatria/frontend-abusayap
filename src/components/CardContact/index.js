import React from 'react'
import { Media, Image } from 'react-bootstrap'
import './CardContact.css'

const CardContact = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className="ContacCard">
        <Media>
          <Image
            width={70}
            height={70}
            className="mr-3 imgContact"
            src="https://img.pngio.com/happy-person-png-transparent-happy-personpng-images-pluspng-people-without-face-png-1042_788.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <p className="my-2 text-display-xs-bold-18">Robert Chandler</p>
            <p className="m-0 text-sm">
              +62 8139 3877 7946
            </p>
          </Media.Body>
        </Media>
      </div>
    </div>
  )
}

export default CardContact
