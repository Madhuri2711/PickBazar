import logo from './logo.svg';
import './App.css';
import Offers from './component/offers/Offers';
import NavbarMenu from './component/navbar/NavbarMenu';
import { Routes ,Route } from 'react-router-dom';
import FaqPage from './component/faq/FaqPage';
import ContactPage from './component/contact/ContactPage';
import Shops from './component/shops/Shops';
import GroceryPage from './component/shops/GroceryPage';
import HomePage from './component/home/HomePage';
function App() {
  return (
  <>
  <NavbarMenu/>
  <Routes>
  <Route exact path='/' element={<HomePage/>} ></Route>
  <Route exact path='/shops' element={<Shops/>} ></Route>
    <Route path='/offer' element={<Offers/>} ></Route>
    <Route exact path='/faq' element={<FaqPage/>} ></Route>
    <Route exact path='/contact' element={<ContactPage/>} ></Route>
    <Route exact path='/grocery' element={<GroceryPage/>} ></Route>
    {/* <Route exact path='/shops' element={<Shops/>} ></Route>
    <Route exact path='/faq' element={<FAQcomponent/>} ></Route>
    <Route exact path='/contact' element={<Contact/>} ></Route> */}
  </Routes>
    {/* <Offers/> */}
  </>
  );
}

export default App;
