import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const FormInputNumber = (props) => {
  const { name, type, placeholder, onChange, defaultValue } = props
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
        </InputGroup.Text>
        <InputGroup.Text>+62</InputGroup.Text>
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
