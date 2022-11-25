import React from 'react'
import '../App.css'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import clientcaro from '../assests/client car.png'
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
            <img
              className='  img-car container-fluid'
              src={clientcaro}
              alt=''
              style={{ width: '18rem' }}
            />
          </Col>
          <Col className='d-flex container-fluid'>
            <img className='  img-car' src={clientcaro} alt='' />
          </Col>
          <Col className='d-flex container-fluid'>
            <img className='  img-car' src={clientcaro} alt='' />
          </Col>
        </Carousel>
      </Row>
    </div>
  )
}

export default Banner1
