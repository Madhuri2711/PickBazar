import React from 'react'
import './ContactPage.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import { AiFillFacebook } from "react-icons/ai";
//import { BsInstagram } from "react-icons/bs";
//import { AiOutlineTwitter } from "react-icons/ai"

const ContactPage = () => {
  return (
    <>
     <Container className='top-space'>
    <Row>
        <Col xs={{span : 12 , order:2}} md={{span: 4, order: 1}} className='bg-white left mb-5'>
        <img src='./image/contact.svg' alt='' className='contact-img fluid mt-4'/>
        <div className='text '>
             <h6 className=''> Address</h6>
             <p className=''>NY, United States</p>  
          </div>
          <div className='text '>
             <h6>Phone</h6>
             <p>+129290122122</p>  
          </div>
          <div className='text'>
             <h6> Website</h6>
             <p>https://redq.io 
             <a href=' ' className='visit-site'>Visit This Site</a></p>  
          </div>
          <div className='text'>
             <h6>Follow Us</h6>
             <div className='social-icon'>
             <p>
            {/* <AiFillFacebook className='mx-2'/>
            <AiOutlineTwitter className='mx-2'/>
            <BsInstagram className='mx-2'/>  */}
             </p>

             </div> 
          </div>
        </Col>
        <Col xs={{span : 12 , order: 1}} md={7} className='right bg-white mb-5'>
        <h2 className='contact-text mx-4 mt-4'>Questions, Comments, Or Concerns?</h2>
        <Form className='mt-4'>
        <Row className='mx-3 mt-3'>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
            </Col>
        </Row>
        
     

      <Form.Group className="mb-3 mx-4 mt-2" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Label className='mx-4 mt-2'>Description</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Message" className='mx-4'>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="success" className='mt-4 mx-4 mb-3' type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default ContactPage
