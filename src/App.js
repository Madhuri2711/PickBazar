
import { useState } from 'react';
import './App.css';
import Offers from './component/offers/Offers';
import NavbarMenu from './component/navbar/NavbarMenu';
import { Routes ,Route, useParams } from 'react-router-dom';
import FaqPage from './component/faq/FaqPage';
import ContactPage from './component/contact/ContactPage';
import Shops from './component/shops/Shops';
import GroceryPage from './component/shops/GroceryPage';
import HomePage from './component/home/HomePage';
import { ItemData } from './component/context/ItemData';



function App() {
  const [addCart,setAddCart] = useState(0);
  const [addPrice,setAddPrice] = useState(0);
  const [clickItem,setClickItem] = useState([]);
  let id = useParams();


  const [cartItems, setCartItems] = useState([]);

  const AddCartItem = (itemid) => {
    // const itemToAdd = addCart.find(item => item.id === itemid);
    setAddCart(addCart+1);
    //setAddCart(addCart+1)
   
  };
  
  const RemoveCartItem = (itemid) => {
    if(addCart > 0)
    {
      setAddCart(addCart-1);
    }
    
  };
  
  const HandleItemAddCart = (itemid) => {
    if (clickItem.includes(itemid)) {
      RemoveCartItem(itemid);
    } else {
      AddCartItem(itemid);
    }
  };
 

//   const AddCartItem =() => {
    
//     setAddCart(addCart+1);
   
//     //setAddPrice(addPrice*1);

//   }
//   const RemoveCartItem =() => {

    
//     if(addCart > 0)
//     { 
//       setAddCart(addCart-1);

//     }
   
//   }
//   const HandleItemAddCart = (itemid) => {
//     if(clickItem.includes(itemid))
//     {
//         RemoveCartItem(itemid);
//         //setClickItem(clickItem.filter(id => id !== itemid));
       
//     }
//     else
//     {
//         AddCartItem(itemid);
//         //setClickItem([...clickItem,itemid]);
//         console.log(itemid);
//     }

// }

  return (
  <>
  <ItemData.Provider value={{clickItem,HandleItemAddCart,addCart,AddCartItem,RemoveCartItem,addPrice,setAddPrice}}>
  <NavbarMenu/>
  <Routes>
  <Route exact path='/' element={<HomePage/>} ></Route>
  <Route exact path='/shops' element={<Shops/>} ></Route>
    <Route path='/offer' element={<Offers/>} ></Route>
    <Route exact path='/faq' element={<FaqPage/>} ></Route>
    <Route exact path='/contact' element={<ContactPage/>} ></Route>
    <Route exact path='/grocery' element={<GroceryPage/>} ></Route>
   
  </Routes>
  </ItemData.Provider>
  </>
  );
}

export default App;
