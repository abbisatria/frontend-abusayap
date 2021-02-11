import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonCustom = (props) => {
  const { className, type, onClick, children, disabled, block } = props
  return (
    <Button className={className} type={type} onClick={onClick} disabled={disabled} block={block}>
      {children}
    </Button>
  )
}

export default ButtonCustom
