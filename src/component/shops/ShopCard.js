import React from 'react'
import Card from 'react-bootstrap/Card';
//import { FaMapMarkerAlt } from "react-icons/fa";

const ShopCard = (props) => {
  return (
    <>
     <Card className='col-md-5'>

<Card.Body>

    <div className='right-card-content d-flex'>
        <img src={props.image} className={props.className} alt='' height={30} />
        <div className='mt-3'>
            <Card.Title className='mx-3'>{props.title}</Card.Title>
            

           <Card.Subtitle className="mb-2 mx-3 mt-3 text-muted d-flex">
           {/* <FaMapMarkerAlt/>  */} <p className='mx-2'>  {props.data}</p>  
          </Card.Subtitle>

           
        </div>

    </div>

</Card.Body>
</Card>
    </>
  )
}

export default ShopCard
ShopCard.defaultProps = {
  title: 'Grocery Shop',
  
}