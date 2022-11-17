import { Carousel } from 'react-bootstrap'

import '../App.css'
import author from '../assests/author.png'
import quoteicon from '../assests/quoteicon.png'

const Feedback = () => {
  return (
    <div id='clients ' className='p-5'>
      <div className='testimonial'>
        <h1>Client Feedback</h1>
        <div className='test'>
          <div className=' mySwipe'>
            <Carousel className='testi-content swiper-wrapper'>
              <Carousel.Item>
                <div className='left-quote'>
                  <img src={quoteicon} alt='' />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-4 '>
                  <img src={author} alt='' className='image rounded-5' />
                  <div className='d-flex flex-column'>
                    <span className='author'>Okon Bassey</span>
                    <cite className='author-sub'>CMO, Reeder</cite>
                  </div>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                  <p className='slider-text'>
                    “It's exactly what I've been looking for. Their zeal and
                    hardwork in building a very intuitive but proficient
                    solution for our business is highly commendable.”
                  </p>
                </div>
                <div className='right-quote '>
                  <img src={quoteicon} alt='' />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='left-quote'>
                  <img src={quoteicon} alt='' />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-4'>
                  <img src={author} alt='' className='image rounded-5' />
                  <div className='d-flex flex-column'>
                    <span className='author'>Okon Bassey</span>
                    <cite className='author-sub'>CMO, Reeder</cite>
                  </div>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                  <p className='slider-text'>
                    “It's exactly what I've been looking for. Their zeal and
                    hardwork in building a very intuitive but proficient
                    solution for our business is highly commendable.”
                  </p>
                </div>
                <div className='right-quote'>
                  <img src={quoteicon} alt='' />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='left-quote'>
                  <img src={quoteicon} alt='' />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-4'>
                  <img src={author} alt='' className='image rounded-5' />
                  <div className='d-flex flex-column'>
                    <span className='author'>Okon Bassey</span>
                    <cite className='author-sub'>CMO, Reeder</cite>
                  </div>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                  <p className='slider-text'>
                    “It's exactly what I've been looking for. Their zeal and
                    hardwork in building a very intuitive but proficient
                    solution for our business is highly commendable.”
                  </p>
                </div>
                <div className='right-quote '>
                  <img src={quoteicon} alt='' />
                </div>
              </Carousel.Item>
            </Carousel>
            <div className='swiper-button-next nav-btn'></div>
            <div className='swiper-button-prev nav-btn'></div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
