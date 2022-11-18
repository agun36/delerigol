import React from 'react'
import { Col, Row } from 'react-bootstrap'
import company from '../assests/company.png'
const Item = () => {
  return (
    <div>
      <Row className='itemsca  p-5'>
        <h1 className='itemsca--title mb-5'> Our Amazing Clients</h1>
        <Col className='item-centers'>
          <img src={company} alt='' className='img-fluid' />
        </Col>
      </Row>
    </div>
  )
}

export default Item
