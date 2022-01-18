import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./pages/home";
import ProductPage from "./pages/productpage";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Scroll from "./components/Scroll";
import { Routes, Route, Link } from "react-router-dom";
import WishList from "./pages/wishlist/wishlist";
import PrivacyPolicy from "./pages/privacypolicy/privacypolicy";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import PrimaryLayout from "./layouts/primary-layout";

function App() {
  const [currentProduct, setCurrentProduct] = useState("");
  return (
    <>
      <Routes>
        <Route  path="/" element={<PrimaryLayout />}>
          <Route path="/" element={<Home prod={currentProduct} currentProd={setCurrentProduct} />} />
          <Route path="product" element={<ProductPage prod={currentProduct} currentProd={setCurrentProduct} />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <div class="layout">
        <Sidebar></Sidebar>
        <div class="body-container">
          <Header></Header>
          <div class="body-content">
            this is body
          
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
