import React from 'react'
import coat from '../assests/carousel/coat.png'
import galaxy from '../assests/carousel/galaxy.png'
import police from '../assests/carousel/police.png'
import coat2 from '../assests/carousel/coat2.png'
import insurance from '../assests/carousel/insurance.png'
import { Col, Row } from 'react-bootstrap'

const Item = () => {
  return (
    <div>
      <Row className='itemsca  p-5'>
        <h1 className='itemsca--title mb-5'> Our Amazing Clients</h1>
        <Col className='item-centers mt-5 ' style={{ width: '100%' }}>
          <div className='me-4'>
            <img src={coat} alt='' className='img-fluid' />
            <small>Central Bank Of Nigeria</small>
          </div>
          <div className='me-4'>
            <img src={galaxy} alt='' className='img-fluid' />
          </div>
          <div className='me-4'>
            <img src={police} alt='' className='img-fluid' />
          </div>
          <div className='ml-4'>
            <img src={insurance} alt='' className='img-fluid' />
          </div>

          <div className='ml-4'>
            <img src={coat2} alt='' className='img-fluid' />
            <small>Central Bank Of Nigeria</small>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Item
