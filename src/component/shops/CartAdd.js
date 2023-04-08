import React, { useContext } from 'react'
import AddCartModel from './AddCartModel'
import { ItemData } from '../context/ItemData'

const CartAdd = () => {
  const {addCart} = useContext(ItemData);
  return (
   <>
     <div className='m-5'>
     <div className='cart'>
       <div className='d-flex mx-3 pt-3'>
         {/* <BsFillBagCheckFill/> */}
        <p className='itemss'>{addCart} Items</p>
       </div>
       <div className=' d-flex'>
     
         <div className='mx-3'>
         <AddCartModel/>
         </div>
       
        
       </div>
     </div>

    </div>
   </>
  )
}

export default CartAdd
