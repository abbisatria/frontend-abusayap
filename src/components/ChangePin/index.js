import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import PinInput from 'react-pin-input'
import ButtonCustom from '../ButtonCustom'

export default class ChangePin extends Component {
  render () {
    return (
      <Card className="card-menu border-0">
        <Card.Body>
          <p className="text-display-xs-bold-18">Change Pin</p>
          <p className="text-sm">Enter your current 6 digits Abusayap PIN below <br/> to continue to the next steps.</p>
          <div className="col-7 mx-auto">
            <Form>
              <div
                className="d-flex justify-content-center align-content-center pt-4 pb-5">
              <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => {}}
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ borderColor: '#9DA6B5', borderRadius: '10px' }}
                inputFocusStyle={{ borderColor: '#00D16C' }}
                onComplete={(value, index) => {}}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                </div>
                <ButtonCustom block >
                    Continue
                </ButtonCustom>
            </Form>
          </div>
        </Card.Body>
      </Card>
    )
  }
}
