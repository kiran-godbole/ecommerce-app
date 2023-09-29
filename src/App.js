import React from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import Navbar from "./components/Header/Navbar";
import Contact from "./components/Pages/Contact";
import ProductDetail from "./components/Pages/ProductDetail";
import Cart from "./components/Pages/Cart";
import ErrorPage from "./components/Pages/ErrorPage";

import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetail/id:" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
