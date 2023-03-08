import React from 'react'
import AddCartModel from './AddCartModel'

const CartAdd = () => {
  return (
   <>
     <div className='m-5'>
     <div className='cart'>
       <div className='d-flex mx-3 pt-3'>
         {/* <BsFillBagCheckFill/> */}
        <p className='itemss'>3 Items</p>
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
