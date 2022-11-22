import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
const Blocquote = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className='blockg'>
      <Row className=' p-5  justify-center align-items-center'>
        <Col sm={12} md={6} lg={6}>
          <h1 className='blocq--title'>Ready to give your business a boost?</h1>
          <p className='blocq--text'>
            Need further clarification or ready to start a project? Get in touch
            with us and we will be more than happy to assist.
          </p>
        </Col>
        <Col sm={12} md={6} lg={6} className='input'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className=' mb-3 frex'>
              <Col xs={12} md={6} lg={5}>
                <Form.Group controlId='validationCustom01'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    required
                    className='name-form'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please choose a name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col xs={12} md={6} lg={5}>
                <Form.Group controlId='validationCustom02'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    required
                    className='email-form'
                  />
                  <Form.Control.Feedback className='fedback' type='invalid'>
                    Please choose a Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className='row-form2 '>
              <Col sm={12} lg={10}>
                <Form.Group
                  as={Col}
                  className='mb-3  message-input'
                  controlId='validationCustom03'
                >
                  <Form.Label>message</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='message'
                    required
                    className='text-area'
                  />
                </Form.Group>
              </Col>
              <Col lg={10}>
                <Button className='form-btn' type='submit'>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Blocquote
