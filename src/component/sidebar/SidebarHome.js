import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import GroceryCardItem from '../shops/GroceryCardItem';
import CartAdd from '../shops/CartAdd';
const SidebarHome = () => {
  return (
    <>
          <Container fluid className=' mt-4'>
    <Row>
        <Col xs={{span : 12}} md={{span: 3}} className='bg-white fixed mb-5'>
       
     
        </Col>
        <Col xs={{span : 12}} md={8} className='scrollit  bg-white mb-5'>
     
<GroceryCardItem/>
        </Col>
      </Row>
    </Container>
<CartAdd/>
    </>
  )
}

export default SidebarHome
