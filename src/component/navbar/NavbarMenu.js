import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import ButtonData from '../button/ButtonData';
//import DropDownData from './DropDownData';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/ButtonComponent';

const NavbarMenu = () => {
  return (
   <>
     <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className=' fixed-top menu px-4'>
     
     <Link to='/'>
     <Navbar.Brand > <img src='./image/PickBazar.png' className=' h-7 mt-3' alt='' height={30}></img> </Navbar.Brand>
     </Link>  
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">
              {/* <DropDownData/> */}
          </Nav.Link>
         
        
        </Nav>
        <Nav>
          <Nav.Link className=''>
          <Link to='/shops' className='navmenu'>Shops</Link></Nav.Link>
          <Nav.Link href="#deets" className='navmenu'>
          <Link to='/offer' className='navmenu'>Offers</Link>
          </Nav.Link>
          <Nav.Link href="#deets" >
          <Link to='/faq' className='navmenu'>FAQ</Link>
          </Nav.Link>
          <Nav.Link href="#deets" >
          <Link to='/contact' className='navmenu'>Contact</Link>
          </Nav.Link>
          {/* <ButtonData>Become a Seller</ButtonData>
          <ButtonData>Join</ButtonData> */}
          <ButtonComponent>Become a Seller</ButtonComponent>
          <ButtonComponent>Join</ButtonComponent>
         
        </Nav>
      </Navbar.Collapse>

  </Navbar>
   </>
  )
}

export default NavbarMenu
