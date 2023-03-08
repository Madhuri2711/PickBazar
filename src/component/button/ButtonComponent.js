import React from 'react'
import './ButtonData.css'

const ButtonComponent = (props) => {
  return (
    <>
    <button type='button' className=' mx-2 px-2 text-white btn-data'>
    {props.children}
    </button>
     
    </>
  )
}

export default ButtonComponent
