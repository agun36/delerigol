import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import rongil from '../assests/Rongilll.svg'
const NavbarList = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className='position-fixed navbarwove w-100'>
      <Navbar collapseOnSelect expand='md' className='wrap  ' top='0'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={rongil} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar-expand-md '
            className=''
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-collapse`}
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                <img
                  src={rongil}
                  width='30'
                  height='30'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='nav-list  justify-content-end flex-grow-1 flex-wrap mr-auto mb-2 mb-lg-0'>
                <a href='#home' className='nav-link'>
                  Home
                </a>
                <hr />

                <a href='#about' className='nav-link'>
                  About
                </a>
                <hr />
                <a href='#service' className='nav-link'>
                  Service
                </a>
                <hr />
                <a href='#project' className='nav-link'>
                  Projects{' '}
                </a>
                <hr />
                <a href='#clients' className='nav-link'>
                  Clients Stories{' '}
                </a>
                <hr />
                <a href='#contact' onClick={handleShow} className='nav-link'>
                  Contact{' '}
                </a>
                <hr />
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h4 className='modal--title'> Contact Us</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label className='label'>Name</Form.Label>
                        <Form.Control type='Name' autoFocus />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label className='label'>Subject</Form.Label>
                        <Form.Control type='text' autoFocus />
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlTextarea1'
                      >
                        <Form.Label className='label'>
                          Example textarea
                        </Form.Label>
                        <Form.Control as='textarea' rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='brandBtn' onClick={handleClose}>
                      Send Message
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarList
