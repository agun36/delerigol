import React from 'react'
import '../App.css'
import { Carousel } from 'react-bootstrap'
import coat from '../assests/carousel/coat.png'
import galaxy from '../assests/carousel/galaxy.png'
import police from '../assests/carousel/police.png'
import coat2 from '../assests/carousel/coat2.png'
import insurance from '../assests/carousel/insurance.png'

const Banner1 = () => {
  return (
    <>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item className='carosel-inner d-flex w-100'>
          <div>
            <img src={coat} alt='' />
            <span>Central Bank Of Nigeria</span>
          </div>
          <div>
            <img src={galaxy} alt='' />
          </div>
          <div>
            <img src={police} alt='' />
          </div>
          <div>
            <img src={insurance} alt='' />
          </div>

          <div>
            <img src={coat2} alt='' />
            <span>Central Bank Of Nigeria</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Banner1
