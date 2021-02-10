import React from 'react'
import { Container, Image } from 'react-bootstrap'
import logo from '../../assets/images/abusayap_white_logo.png'
import screenHp from '../../assets/images/screen_app_double.png'

import './style.css'

const LeftAuth = () => {
  return (
    <Container>
      <Image src={logo} width={170}/>
      <Image src={screenHp} height={575} />
      <p className="text-white text-display-xs-bold">App that Covering Banking Needs.</p>
      <p className="text-white">Abusayap is an application that focussing in banking needs for all users
        in the world. Always updated and always following world trends.
        5000+ users registered in Abusayap everyday with worldwide
        users coverage.</p>
    </Container>
  )
}

export default LeftAuth
