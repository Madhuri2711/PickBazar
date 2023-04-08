import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CartAdd from '../shops/CartAdd';
import LeftSidebar from '../sidebar/LeftSidebar';
import SidebarHome from '../sidebar/SidebarHome';
import './HomePage.css';
import Slider from './Slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomePage = () => {
  return (
   <>
      <div className='home'>
   <h1 className='text-center hero-text-h1 '>Groceries Delivered in 90 Minute</h1>
     <p className='text-center hero-text-p mt-4'>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
    <div className=' w-50 mx-auto mt-5'>
    <InputGroup className="mb-3 inputdata">
        <Form.Control
          placeholder="Search Here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='btn btn-success btn-search px-4' id="button-addon2">
        {/* <AiOutlineSearch/> */}
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search */}
        </Button>
      </InputGroup>

    </div>
    

   </div>
   <Slider/>
   <SidebarHome/>
   </>
  )
}

export default HomePage