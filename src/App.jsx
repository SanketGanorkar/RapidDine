import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin = {setShowLogin}/>: <></>}
      <Router basename="/food-del">
        <div className="app">
          <Navbar setShowLogin = {setShowLogin}/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
