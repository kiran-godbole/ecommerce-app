import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Store from "./components/Pages/Store";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Pages/ProductDetails";
import { CartProvider } from './components/Cart/CartContext';
import AuthForm from "./components/Autho/AuthForm";


import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import AuthContext from "./components/Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element ={authCtx.isLoggedIn ? <Store/> :  <Navigate to="/auth" />}/>
          <Route path="/contact" element={<Contact />} />
          {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthForm/>}/>
          )}
          {/* <Route path="/profile"
          element ={authCtx.isLoggedIn ? <UserProfile/> :  <Navigate to="/auth" />}/>        */}
          
          
          <Route path="/products/:ProductId" element ={authCtx.isLoggedIn ? <ProductDetails/> :  <Navigate to="/auth" />}/>
          <Route path="*"
          element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App;
