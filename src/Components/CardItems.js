import React from 'react'
import { Col, Row } from 'react-bootstrap'

import cardIcon from '../assests/CardIcon.png'
import clock from '../assests/clock.png'
import likeicon from '../assests/like icon.png'
import micicon from '../assests/mic icon.png'
const CardItems = () => {
  return (
    <div>
      <Row className='p-5 card--items'>
        <Col>
          <h4 className='cardlist-title'>We provide value for you</h4>
          <Row className='card-body mt-5'>
            <Col sm={12} md={6} lg className=' card pt-4 me-3'>
              <img src={clock} alt='showing card' className='cardicon ' />
              <p className='card--text'>
                Leverage on our business solutions to drive operational
                excellence and profitability.
              </p>
            </Col>
            <Col sm={12} md={6} lg className=' card pt-4  me-3'>
              <img src={likeicon} alt='showing card' className='cardicon' />
              <p className='card--text'>
                Deliver more efficient services to individuals, businesses,
                stakeholders and government institutions.
              </p>
            </Col>

            <Col sm={12} md={6} lg className=' card pt-4  me-3'>
              <img src={micicon} alt='showing card' className='cardicon mb-4' />
              <p className='card--text'>
                Improve general operational efficiency and increase return on
                investment
              </p>
            </Col>
            <Col sm={12} md={6} lg className='card pt-4 me-3'>
              <img src={cardIcon} alt='showing card' className='cardicon' />
              <p className='card--text'>
                Realize value from ICT investment from day one through our
                industry-leading methodology and techniques.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CardItems
