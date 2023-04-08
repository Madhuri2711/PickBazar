import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sidebar from './Sidebar';
import Card from 'react-bootstrap/Card';
import ShopCard from './ShopCard';

const ModelPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <> 
   
    <div className='shopcard' onClick={handleShow}>
        <ShopCard image="./image/365img.png" className="rounded" title="Grosery Shop" data="More Info"/>
    
       
      </div>
      


<Modal show={show} onHide={handleClose} oanimation={false} className="">
<Modal.Header closeButton>
  <Modal.Title></Modal.Title>
</Modal.Header>
<Modal.Body>
<div className='mobile-menu'>

   <Sidebar/>
 
</div>

</Modal.Body>
{/* <Modal.Footer>
  <Button variant="secondary" >
    Close
  </Button>
  <Button variant="p" >
    Save Changes
  </Button>
</Modal.Footer> */}
</Modal>

    </>
   
  )
}

export default ModelPage