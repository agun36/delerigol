import React from 'react'
import '../App.css'
import NavbarList from './NavbarList'
import headerimg from '../assests/header 304.svg'
import rounded from '../assests/roundImg.png'
import plus from '../assests/Vector plus.png'
import plus2 from '../assests/Vector plus2.png'
import bounce from '../assests/bounce.png'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <div className='bg-white'>
        <NavbarList />
      </div>
      <>
        <Row className=' header--container '>
          <Col sm={8} className='header__content'>
            <h1 className='header__content--title'>
              Innovative Business Soutions
            </h1>
            <button
              style={{ width: '200px' }}
              className=' header__content--btn'
            >
              Explore
            </button>
          </Col>

          <Col sm={4} className=' header__content--image'>
            <img
              className=' header__content--image--img1'
              src={headerimg}
              alt=''
            />
            <img
              className='header__content--image--bounce bounce2'
              src={bounce}
              alt=''
            />
            <img
              className='header__content--image--plus'
              src={plus}
              alt='plus'
            />
            <img
              className='header__content--image--plus2'
              src={plus2}
              alt='plus2'
            />
            <img
              className='header__content--image--rounded'
              src={rounded}
              alt=''
            />
          </Col>
        </Row>
      </>
    </>
  )
}

export default Header
