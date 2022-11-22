import React from 'react'
import { Button, Card } from 'react-bootstrap'
import past from '../assests/pastproject.png'
const Project = () => {
  return (
    <div className='project  mb-5' id='project'>
      <div className=' p-5 '>
        <h1 className='text  mb-4'>Some Past Projects</h1>
        <div className='row-gold mb-5 d-flex justify-content-center container '>
          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <Card.Text className='textlist'>
                Provision of enterprise document management solution for a
                private and public sector clients.
              </Card.Text>
            </Card.Body>
          </div>

          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <p className='textlist'>
                Provision of enterprise document management solution for a
                private and public sector clients.
              </p>
            </Card.Body>
          </div>

          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <p className='textlist'>
                Design Sprint: assisted corporate and government client in their
                product and service innovation.
              </p>
            </Card.Body>
          </div>
        </div>
        <div className='row-gold mb-5 d-flex justify-content-center container'>
          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <Card.Text className='textlist'>
                Development and operation of e-Business Retail Portal for some
                private sector clients.
              </Card.Text>
            </Card.Body>
          </div>

          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <p className='textlist'>
                Consultancy service on the development of ICT Strategy Plan.
              </p>
            </Card.Body>
          </div>

          <div className='card-project mb-4'>
            <Card.Body className='mt-5 p-3'>
              <img src={past} alt='' className='img-fluid' />

              <p className='textlist'>
                Consultancy service for Project Management on the implementation
                of Core Banking Application.
              </p>
            </Card.Body>
          </div>
        </div>
        <div className='button-service '>
          <Button className='btn-service mb-4  text-white'>
            More Projects
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
