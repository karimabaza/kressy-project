import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home'
import ProductPage from './pages/productpage'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Scroll from './components/Scroll'
import { Routes, Route, Link } from "react-router-dom";
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
      </Routes>
    
    

    </>
  )
};


export default App;
