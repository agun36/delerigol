import React from 'react'
import '../App.css'

import coat from '../assests/carousel/coat.png'
import galaxy from '../assests/carousel/galaxy.png'
import police from '../assests/carousel/police.png'
import coat2 from '../assests/carousel/coat2.png'
import insurance from '../assests/carousel/insurance.png'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Banner1 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 4000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className='p-5'>
      <Row>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          arrows={false}
          responsive={responsive}
          transitionDuration={500}
          infinite={true}
          autoPlay={1000}
          itemAriaLabel={3}
        >
          <Col className='d-flex '>
            <div className='mb-2 me-4'>
              <img className=' img-fluid' src={coat} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={galaxy} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={police} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={insurance} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={coat2} alt='' />
            </div>
          </Col>

          <Col className='d-flex'>
            <div className='mb-2 me-4'>
              <img className=' img-fluid' src={coat} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={galaxy} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={police} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={insurance} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={coat2} alt='' />
            </div>
          </Col>

          <Col className='d-flex'>
            <div className='mb-2 me-4'>
              <img className=' img-fluid' src={coat} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={galaxy} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={police} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={insurance} alt='' />
            </div>

            <div className='mb-2 me-4'>
              <img className='img-fluid' src={coat2} alt='' />
            </div>
          </Col>
        </Carousel>
      </Row>
    </div>
  )
}

export default Banner1
