import React, { useEffect, useState, Fragment } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*Layouts*/
import PrimaryLayout from "./layouts/primary-layout";
import SecondaryLayout from "./layouts/secondary-layout";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacypolicy/privacypolicy";
import ProductPage from "./pages/productpage";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import WishList from "./pages/wishlist/wishlist";

export default () => {
    const [currentProduct, setCurrentProduct] = useState("");
  return (
    <>
    <Routes>
              <Route path="/" element={<Home prod={currentProduct} currentProd={setCurrentProduct} />} />
              <Route path="product" element={<ProductPage prod={currentProduct} currentProd={setCurrentProduct} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
    </>
  );
};
