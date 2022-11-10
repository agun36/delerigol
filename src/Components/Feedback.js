import { Carousel } from 'react-bootstrap'
import '../App.css'
import author from '../assests/author.png'
import quoteicon from '../assests/quoteicon.png'
import prev from '../assests/previous.png'
import next from '../assests/next.png'
const Feedback = () => {
  return (
    <div id='clients'>
      <h1 className='feedback-title'>Clients Feedback</h1>
      <div className='bodycard'>
        <Carousel className='postcaro'>
          <Carousel.Item className='card-body'>
            <img className='prev' src={prev} alt='' />
            <img className='next' src={next} alt='' />
            <img
              className='icone'
              src={quoteicon}
              style={{ width: '69px', height: '40.93px', opacity: '20%' }}
              alt=''
            />
            <div className='iconcarou'>
              <div className='author'>
                <div>
                  <img className='rounded-5' src={author} alt='' />
                </div>
                <div className='author2'>
                  <span className='author-title'>Okon Bassey</span>
                  <span>Omo Reader</span>
                </div>
              </div>
              <div className=''>
                <p className='caption-text'>
                  “It's exactly what I've been looking for. Their zeal and
                  hardwork in building a very intuitive but proficient solution
                  for our business is highly commendable.”
                </p>
              </div>
            </div>
            <img src={quoteicon} className='icone2' alt='' />
          </Carousel.Item>
          <Carousel.Item className='card-body'>
            <img className='prev' src={prev} alt='' />
            <img className='next' src={next} alt='' />
            <img
              className='icone'
              src={quoteicon}
              style={{ width: '69px', height: '40.93px', opacity: '20%' }}
              alt=''
            />
            <div className='iconcarou'>
              <div className='author'>
                <div>
                  <img src={author} alt='' className='rounded-5' />
                </div>
                <div className='author2'>
                  <span className='author-title'>Okon Bassey</span>
                  <span>Omo Reader</span>
                </div>
              </div>
              <div className=''>
                <p className='caption-text'>
                  “It's exactly what I've been looking for. Their zeal and
                  hardwork in building a very intuitive but proficient solution
                  for our business is highly commendable.”
                </p>
              </div>
            </div>
            <img src={quoteicon} className='icone2' alt='' />
          </Carousel.Item>
          <Carousel.Item className='card-body'>
            <img className='prev' src={prev} alt='' />
            <img className='next' src={next} alt='' />
            <img
              className='icone'
              src={quoteicon}
              style={{ width: '69px', height: '40.93px', opacity: '20%' }}
              alt=''
            />
            <div className='iconcarou'>
              <div className='author'>
                <div>
                  <img src={author} alt='' className='rounded-5' />
                </div>
                <div className='author2'>
                  <span className='author-title'>Okon Bassey</span>
                  <span>Omo Reader</span>
                </div>
              </div>
              <div className=''>
                <p className='caption-text'>
                  “It's exactly what I've been looking for. Their zeal and
                  hardwork in building a very intuitive but proficient solution
                  for our business is highly commendable.”
                </p>
              </div>
            </div>
            <img src={quoteicon} className='icone2' alt='' />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Feedback
