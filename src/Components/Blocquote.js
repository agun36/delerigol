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
        <Col sm={12} md={6} lg={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className='row-form '>
              <Row className='mb-3 '>
                <Form.Group sm md lg as={Col} controlId='validationCustom01'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please choose a name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId='validationCustom02'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please choose a Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
            <Form.Group
              as={Col}
              className='mb-3'
              controlId='validationCustom03'
            >
              <Form.Label>message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='message'
                required
              />
            </Form.Group>
            <Row>
              <Button
                style={{ background: '#9CC236' }}
                as={Col}
                sm
                md
                lg
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Blocquote
