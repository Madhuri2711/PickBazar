import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import { AiFillFacebook } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";
// import { AiOutlineTwitter } from "react-icons/ai";



const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text-data">
      {isReadMore ? text.slice(0, 50) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ?
          <h5 className='text-center text-data text-success pointer'>Read More</h5>
          :
          <h5 className='text-center text-data text-success pointer'>Less</h5>
        }
      </span>
    </p>
  );
};


const SideBar = () => {
  return (
    <>
      <Card className=''>

        <Card.Body>

          <div className='right-card-content '>
            <img src='./image/365img.png' className='mx-auto my-auto d-block  h-40 rounded-sm' align='center' alt=''  />

            <div className='mt-3'>
              <Card.Title className='mx-3 text-center'>Grocery Shop  </Card.Title>
              <Card.Subtitle className="mb-2 mx-3 text-muted text-center">
                <ReadMore> This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.
                </ReadMore>

              </Card.Subtitle>
              <div className='social-icon text-center'>
                <p className='text-muted'>
                  {/* <AiFillFacebook className='mx-2' />
                                                 <AiOutlineTwitter className='mx-2' />
                                                 <BsInstagram className='mx-2' />
                                             </p> */}
                </p>

              </div>
              <hr></hr>
              <div className='text '>
                <h6 className=''> Address</h6>
                <p className=''>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</p>
              </div>
              <div className='text '>
                <h6>Phone</h6>
                <p>+129290122122</p>
              </div>
              <div className='text'>
                <h6> Website</h6>
                <p>https://redq.io
                  <a href=' ' className='visit-site'>Visit This Site</a></p>
              </div>
            </div>

          </div>

        </Card.Body>
      </Card>





    </>
  )
}

export default SideBar
