
import React,{useState} from 'react'
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import SideBar from './SideBar';
import './Shops.css';
import ShopCard from './ShopCard';
import ModelPage from './ModelPage'
import GroceryCardItem from './GroceryCardItem';
import CartAdd from './CartAdd';

const ReadMore = ({ children }) => {
    // const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text-data">
        {/* {isReadMore ? text.slice(0, 50) : text} */}
        <span onClick={toggleReadMore} className="read-or-hide">
        
          {isReadMore ? 
           {/* <ModelPage></ModelPage> */}
            :
            <h5 className='text-center text-success pointer'>Less</h5>
          }
        </span>
      </p>
    );
  };
const GroceryPage = () => {
  return (
  <>
     
     <div className='shopcard'>
     
      <ModelPage></ModelPage> 

    </div>

    
    <Container fluid className='top-space'>
    <Row>
        <Col xs={{span : 12}} md={{span: 3}} className=' scrollbar-primary fixed mb-5'>
         
         <div className="d-sidebar">
         <Sidebar/>
         </div>
      
        </Col>
        <Col xs={{span : 12}} md={8} className='scrollit  bg-white mb-5'>
        <img src='./image/grocery-bg.webp' alt='' className='grocery-img thumbnail' height={325} />

<GroceryCardItem/>
        </Col>
      </Row>
    </Container>
<CartAdd/>
    {/* <Container fluid className='top-space'>
       <Row>
      
      <div className='d-sidebar'>
      <Col xs={{span : 12 }} md={{span: 4}} className='bg-white scrollbar-primary'>
      <Sidebar/>
            </Col>
      </div>
     

    
     
     
      <Col xs={{span : 12 , order: 1}} md={7} className='scrollit bg-white mb-5'>
        <img src='./image/grocery-bg.webp' alt='' className='grocery-img thumbnail' height={325} />

      {/* <GroceryCardItem/> 
        </Col>
      </Row>
      </Container> */}

  </>
  )
}

export default GroceryPage