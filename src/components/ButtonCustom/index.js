import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css'

const ButtonCustom = (props) => {
  const { className, type, onClick, children, disabled, block, size } = props
  return (
    <Button className={className} type={type} onClick={onClick} disabled={disabled} block={block} size={size}>
      {children}
    </Button>
  )
}

export default ButtonCustom
