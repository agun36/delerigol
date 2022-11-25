import React from 'react'
import cardIcon from '../assests/CardIcon.png'
import clock from '../assests/clock.png'
import likeicon from '../assests/like icon.png'
import micicon from '../assests/mic icon.png'
const CardItems = () => {
  return (
    <div>
      <div className='p-5 card--items'>
        <div>
          <h4 className='cardlist-title'>We provide value for you</h4>
          <div className=''>
            <div className='card-sm mt-5'>
              <div className=''>
                <div className=' card pt-4 me-3 mb-3 '>
                  <img src={clock} alt='showing card' className='cardicon ' />
                  <p className='card--text'>
                    Leverage on our business solutions to drive operational
                    excellence and profitability.
                  </p>
                </div>
              </div>
              <div className=''>
                <div className=' card pt-4  me-3 mb-3 '>
                  <img src={likeicon} alt='showing card' className='cardicon' />
                  <p className='card--text'>
                    Deliver more efficient services to individuals, businesses,
                    stakeholders and government institutions.
                  </p>
                </div>
              </div>
              <div className=''>
                <div className=' card pt-4  me-3 mb-3'>
                  <img
                    src={micicon}
                    alt='showing card'
                    className='cardicon mb-4'
                  />
                  <p className='card--text'>
                    Improve general operational efficiency and increase return
                    on investment
                  </p>
                </div>
              </div>
              <div className=''>
                <div className='card pt-4 me-3  mb-3'>
                  <img src={cardIcon} alt='showing card' className='cardicon' />
                  <p className='card--text'>
                    Realize value from ICT investment from day one through our
                    industry-leading methodology and techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItems
