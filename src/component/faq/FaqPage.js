import React from 'react'
import './FaqPage.css';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';

const FaqPage = () => {

  return (
    <>
  <Container className='top-space'>
    <h2 className='my-3 text-center faq-text'>FAQ</h2>
      <Accordion>
      <Accordion.Item eventKey="0"  >
        <Accordion.Header className='question'>How to contact with Customer Service?</Accordion.Header>
        <Accordion.Body>
        Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-3'>
        <Accordion.Header className=' text-bold'>App installation failed, how to update system information?</Accordion.Header>
        <Accordion.Body>
        Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
   </Container>
    </>
  )
}

export default FaqPage