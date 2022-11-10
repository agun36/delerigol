import React from 'react'
import past from '../assests/pastproject.png'
const Project = () => {
  return (
    <div className='project p-5' id='project'>
      <div className='service-project p-3 '>
        <h1 className='text'>Some Past Projects</h1>
        <div className='cardlist-project '>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Provision of online exam proctor solution for a private sector
                and public sector clients.
              </p>
            </div>
          </div>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Provision of enterprise document management solution for a
                private and public sector clients.
              </p>
            </div>
          </div>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Design Sprint: assisted corporate and government client in their
                product and service innovation.
              </p>
            </div>
          </div>
        </div>
        <div className='cardlist-project'>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Development and operation of e-Business Retail Portal for some
                private sector clients.
              </p>
            </div>
          </div>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Consultancy service on the development of ICT Strategy Plan.
              </p>
            </div>
          </div>
          <div className='service__project'>
            <img src={past} alt='' />
            <div>
              <p className='textlist-project'>
                Consultancy service for Project Management on the implementation
                of Core Banking Application.
              </p>
            </div>
          </div>
        </div>
        <button className='btn-proj'>Find out More</button>
      </div>
    </div>
  )
}

export default Project
