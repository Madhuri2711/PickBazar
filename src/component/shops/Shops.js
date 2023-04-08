import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/esm/Container';
import ShopCard from './ShopCard';
import { Link } from 'react-router-dom';
const Shops = () => {
  return (
    <>
        <Container className='top-space' >
    <h2 className='my-3 shops-text'>All Shops</h2>
    <Link to='/grocery' className='navmenu'>
    <ShopCard image="./image/365img.png" className="roundedCircle h-20" data="1986 Spinnaker Lane, Illinois, Freeport, 61032, USA"/>
  

    </Link>

    
    </Container>
    </>
  )
}

export default Shops
