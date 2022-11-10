import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutContents = () => {
  return (
    <div className='about-us' id='about'>
      <Row className='about-us__page align-items-center h-100'>
        <Col sm={12}>
          <h1 className='about-us__title'>Who we are?</h1>
          <p className='about-us__text'>
            We are a solution provider of choice with specialty over the years
            in solution development, business alignment and technology execution
            to ensure orgaisations meet and surpass their strategic goals.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutContents
