import React, { useState } from 'react'
import code1 from '../assests/code1.png'
import code from '../assests/code.png'
import plane from '../assests/plane.png'
import bulb from '../assests/bulb.png'

import { Button, Modal, Stack } from 'react-bootstrap'

const Servicecontents = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <div className='service-card p-5 ' id='service'>
        <h1 className='text servicetitle'>Our Service</h1>
        <div className='cardlist cardlist1 '>
          <div className='service__cardlist'>
            <img src={code1} alt='' className='img-fluid' />
            <h4 className='servicetitle mt-3'>Business Solutions</h4>
            <p className='textlist'>
              We are a software shop that has built few business solutions that
              help our clients improve their operational efficiency and
              bottomline.
            </p>
          </div>
          <div className='service__cardlist'>
            <img src={code} alt='' className='img-fluid' />
            <h4 className='servicetitle mt-3'>ICT Consulting</h4>
            <p className='textlist'>
              We consult for corporate on technology strategy, enterprise
              architecture and technology execution to drive strategic business
              goals.
            </p>
          </div>
        </div>
        <div className='cardlist cardlist2'>
          <div className='service__cardlist'>
            <img src={plane} alt='' className='img-fluid' />
            <h4 className='servicetitle mt-3'>Design Sprint </h4>
            <p className='textlist'>
              We facilitate design sprint to help you innovate on new services
              and products quickly and effectively so you can focus on giving
              your customers what they truly want.
            </p>
          </div>
          <div className='service__cardlist'>
            <img src={bulb} alt='' className='img-fluid' />
            <h4 className='servicetitle mt-3'>GovTech Innovation</h4>
            <p className='textlist'>
              We work with governments to innovate on efficient and value-driven
              services for citizens, businesses, external stakeholders and other
              government institutions.
            </p>
          </div>
        </div>
        <div className='servicebutton'>
          <Button className='btn-service mb-4 ' onClick={handleShow}>
            Find out More
          </Button>
        </div>
        <Modal show={show} onHide={handleClose} dialogClassName='modal-90w'>
          <Modal.Header closeButton>
            <Modal.Title>Our Services </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Stack direction='horizontal' gap={3}>
              <div className=' modallist'>Software Devolopment </div>
              <div className=' modallist'> ICT Consulting</div>
              <div className=' modallist'>Design Sprint</div>
              <div className=' modallist'>GovTech Innovation</div>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <div className=' modal--footer p-5'>
              <div style={{ height: '200px', overflow: 'scroll' }}>
                <div className=' d-flex align-items-center modallist-title gap-2'>
                  <img src={code1} alt='' />
                  <h3 className='modal--title'>Software Development</h3>
                </div>
                <p className='modal-text'>
                  We build customized software for clients to help them
                  improvetheir operational efficiency and outputs. We utilize
                  agile methodology to build our solution The software can range
                  from simple tools to complex ones. We often consider the
                  peripheral software as those that no one focuses on but
                  deliver great value to organisations.
                </p>
                <p className='modal-text'>
                  Our Development Outcomes include but not limited to:
                </p>
                <ul className='modal-text'>
                  <li>Electronic document management system (EDMS)</li>
                  <li>Online proctor solution</li>
                  <li>Gratuity and pension payment solution</li>
                  <li>HR and payroll application</li>
                </ul>

                <div className=' d-flex align-items-center gap-2'>
                  <img src={code} alt='' />
                  <h3
                    className='modal--titl'
                    style={{
                      width: '300px',
                      fontSize: '102px',
                    }}
                  >
                    ICT Consulting
                  </h3>
                </div>
                <p className='modal-text'>
                  Technology is known to be an enabler for driving every aspect
                  of businesses or sectors. To ensure organisations derive
                  maximum value for money for their technology investment, it is
                  important for organisations to evaluate and /or strategise on
                  how and what to invest in technology to drive their business.
                  This is where we come in. From our staff experience in
                  technology consulting in both private and pubic sector, we
                  help organisations to assess, strategise, design and develop
                  technology strategy, enterprise architecture and technology
                  roadmap that can be implemented to support the organisation
                  goals. We provide consulting services to organisations on how
                  they can leverage ICT to:
                </p>
                <p className='modal-text'>
                  Our Development Outcomes include but not limited to:
                </p>
                <ul className='modal-text'>
                  <li>Improve staff performance</li>
                  <li>
                    Streamline their processes and do more with less efforts
                  </li>
                  <li>Drive productivity</li>
                  <li>Improve organizational performance</li>
                </ul>
                <h5 className='modal-text'>
                  Our Consulting Outcomes include but not limited to:
                </h5>
                <ul className='modal-text'>
                  <li>
                    Development and implementation of Enterprise Architecture
                    and Strategy on Business operations/services/products,
                    Application (i.e. enterprise and productivity software),
                    Business Information (where and how they are sourced,
                    processed, stored and retrieved), Technology (hardware,
                    network, connectivity, software etc), People/Processes &
                    Tools, and Enterprise Architecture Governance
                  </li>
                  <li>
                    Project Management Service (providing project management
                    service to organisations embarking on specific projects to
                    be implemented by a third-party vendor. We ensure that our
                    clients get value for money from the project that the third
                    party is to deliver)
                  </li>
                  <li>
                    Development of short, medium and long term Organisational
                    ICT Strategy Document, including technology architecture
                    plan, ICT Roadmap etc
                  </li>
                  <li>
                    ICT Audit Service to identify gaps and recommend areas for
                    improvements
                  </li>
                  <li>
                    Development of Technology Operational Management (TOM)
                    Service
                  </li>
                  <li>Business Continuity & Disaster Recovery Service</li>
                </ul>
                <div className=' d-flex align-items-center gap-2'>
                  <img src={plane} alt='' />
                  <h3 className='modal--title'>Design Sprint</h3>
                </div>
                <p className='modal-text'>
                  Design Sprint is a proven, repeatable process for rapidly
                  solving big challenges, creating new products or services, or
                  improving existing ones. It compresses months of work into
                  just a few days. At Rongil, we facilitate design sprint to
                  help you create new service or product idea quickly and
                  effectively so you can focus on giving your customers what
                  they truly want. Our consultants are trained by MIT, Columbia
                  Business School and Dartmouth’s Tuck School of Business. From
                  mapping, sketching, and deciding, to prototyping and testing,
                  your organisation will learn to master each step of Design
                  Sprint by actually doing it. You will build muscle memory for
                  facilitating your own sprints (whether it is their 1st or
                  101st) and for incorporating these techniques into problem
                  solving, product development, and day-to-day operations. For
                  each sprint, we take you through three broad phases that
                  centre on people, technology and your business: Real, worth,
                  win
                </p>
                <div className=' d-flex align-items-center gap-2'>
                  <img src={bulb} alt='' />
                  <h3 className='modal--title'>GovTech Innovation</h3>
                </div>
                <p className='modal-text'>
                  We work with the public sector through our GovTech Innovation
                  Lab Program to innovate new projects that can be driven with
                  technology to deliver more efficient and effective government
                  services and/or products to citizens, businesses, external
                  stakeholders and other government institutions. We leverage on
                  our wealth of experience and understanding of the public
                  sector to work with the client to hack existing problems,
                  analyse public sector value chain, elicit stakeholder
                  expectations and domesticate new solutions that can be scaled
                  across wider geographical spread of the country. We have
                  executed this type of service for some federal government
                  institutions in helping them to shape annual projects.
                </p>
              </div>
              <div>
                <div className='d-flex align-items-center m-auto '>
                  <img
                    src='https://rongil.onrender.com/assets/img/services.png'
                    alt=''
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Servicecontents
