import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { Telephone } from 'react-bootstrap-icons'
import './style.scss'

const FormInputNumber = (props) => {
  const { name, type, placeholder, onChange, defaultValue } = props
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text className="border-0 input-num-icon">
          <Telephone />
        </InputGroup.Text>
        <InputGroup.Text className="border-0 input-num-icon">+62</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        className="shadow-none input-num"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        required
      />
    </InputGroup>
  )
}

export default FormInputNumber
