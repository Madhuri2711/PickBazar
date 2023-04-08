import React,{useState} from 'react'

//import { Sidenav, Nav } from 'rsuite';

const LeftSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleDropdownClick(index) {
      setActiveIndex(index === activeIndex ? null : index);
    }
    return (
    <>
    <div className='m-5 '>
    <button
        className={`dropdown-btn ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleDropdownClick(0)}
      >
        Fruits & vegetables <i className="fa fa-caret-down"></i>
      </button>
      <div className={`dropdown-container ${activeIndex === 0 ? 'show' : ''}`}>
        <a href="# ">fruits</a>
        <a href="# ">vegetables</a>
      </div>

      <button
        className={`dropdown-btn ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleDropdownClick(0)}
      >
        Fruits & vegetables <i className="fa fa-caret-down"></i>
      </button>
      <div className={`dropdown-container ${activeIndex === 0 ? 'show' : ''}`}>
        <a href="# ">fruits</a>
        <a href="# ">vegetables</a>
      </div>

    
    </div>
    
    </>
  )
}

export default LeftSidebar