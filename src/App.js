import { useEffect, useState } from 'react';
import './App.scss';
import Home from './pages/home'
import ProductPage from './pages/productpage'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Scroll from './components/Scroll'
import { Routes, Route, Link } from "react-router-dom";
import WishList from './pages/wishlist/wishlist';
import PrivacyPolicy from './pages/privacypolicy/privacypolicy';
function App() {
  const [currentProduct,setCurrentProduct]=useState("")
  return(
    <>
         <Scroll />
       <Routes>
        <Route path="/" element={<Home prod={currentProduct} currentProd={setCurrentProduct} />} />
        <Route path="product" element={<ProductPage prod={currentProduct} currentProd={setCurrentProduct} />} />
        <Route path="/signin" element={<SignIn  />} />
        <Route path="/signup" element={<SignUp  />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    
    

    </>
  )
};


export default App;
