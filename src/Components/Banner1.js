import React from 'react'
import '../App.css'
import Carousel from 'react-multi-carousel'
import coat from '../assests/carousel/coat.png'
import galaxy from '../assests/carousel/galaxy.png'
import police from '../assests/carousel/police.png'
import coat2 from '../assests/carousel/coat2.png'
import insurance from '../assests/carousel/insurance.png'

const Banner1 = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className='carousel'
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={2}
        swipeable
      >
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
      </Carousel>
    </>
  )
}

export default Banner1
