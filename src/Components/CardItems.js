import React from 'react'

import cardIcon from '../assests/CardIcon.png'
const CardItems = () => {
  return (
    <div>
      <div className='p-5 card--items'>
        <h4 className='cardlist-title'>We provide value for you</h4>
        <div className='cardlist--items p-5'>
          <div className='card-Item card '>
            <img src={cardIcon} alt='showing card' className='cardicon' />
            <p className='card--text'>
              Realize value from ICT investment from day one through our
              industry-leading methodology and techniques.
            </p>
          </div>
          <div className='card-Item card'>
            <img src={cardIcon} alt='showing card' className='cardicon' />
            <p className='card--text'>
              Realize value from ICT investment from day one through our
              industry-leading methodology and techniques.
            </p>
          </div>
          <div className='card-Item card'>
            <img src={cardIcon} alt='showing card' className='cardicon' />
            <p className='card--text'>
              Realize value from ICT investment from day one through our
              industry-leading methodology and techniques.
            </p>
          </div>
          <div className='card-Item card'>
            <img src={cardIcon} alt='showing card' className='cardicon' />
            <p className='card--text'>
              Realize value from ICT investment from day one through our
              industry-leading methodology and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItems
