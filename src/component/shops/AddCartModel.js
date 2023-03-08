import React,{useState} from 'react'
import  './AddCartModel.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import { BsFillBagCheckFill } from 'react-icons/bs';

const AddCartModel = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
   <>
     <Button  className='cart-doller bg-white text-black'onClick={handleShow}>
        $16.00
      </Button>
      <Modal
  show={show}
  onHide={handleClose}
  dialogClassName="modal-150w modal-top-right side"
  aria-labelledby="example-custom-modal-styling-title"
>
  <Modal.Header closeButton>
    <div className='d-flex item-bag'>
        {/* <BsFillBagCheckFill/> */}
    </div>
  </Modal.Header>
  <Modal.Body>
    <div className='body_bag'>
      {/* <BsFillBagCheckFill /> */}
    </div>
    <div className='no_product'>
      No product found
    </div>
  </Modal.Body>
  <Modal.Footer>
    <div className='container'>
      <div className='row'>
        <div>
          <button className='col-md-12 d-flex checkout'>
            <div className='chcekout mx-auto'>checkout</div>
            <button className='countdoller mx-auto'>$00</button>
          </button>
        </div>
      </div>
    </div>
  </Modal.Footer>
</Modal>


   </>
  )
}

export default AddCartModel
