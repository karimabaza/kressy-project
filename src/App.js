import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home'
import ProductPage from './pages/productpage'
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
      </Routes>
    
    

    </>
  )
};


export default App;
