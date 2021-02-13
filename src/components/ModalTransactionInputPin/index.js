import React from 'react'
import './ModalPin.css'
import { Container, Modal, Form } from 'react-bootstrap'
import PinInput from 'react-pin-input'
import ButtonCustom from '../ButtonCustom'

function ModalInputPin (props) {
  return (
    <Container>
      <Modal
        {...props}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="ModalPinHeader">
            Enter PIN to Transfer
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalPinDetail">
            Enter your 6 digits PIN for confirmation <br />
            to continue transferring money.
          </div>
          <Form>
            <div className="d-flex justify-content-center align-content-center pt-4 pb-5">
              <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => { }}
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ borderColor: '#9DA6B5', borderRadius: '10px' }}
                inputFocusStyle={{ borderColor: '#00D16C' }}
                onComplete={(value, index) => { }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonCustom onClick={props.onGo}>Continue</ButtonCustom>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
export default ModalInputPin
