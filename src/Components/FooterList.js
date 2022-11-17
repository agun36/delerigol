import React from 'react'
import { Stack } from 'react-bootstrap'
import twitter from '../assests/Vector.png'
const FooterList = () => {
  return (
    <div className='  footer'>
      <Stack direction='horizontal' gap={3} className='container'>
        <div> Copyright 2022 Rongil. All Rights Reserved.</div>

        <div className='ms-auto'>
          {' '}
          <img src={twitter} alt='' /> Follow us on Twitter
        </div>
      </Stack>
    </div>
  )
}

export default FooterList
