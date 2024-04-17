import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import {useNavigate} from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const navigate = useNavigate();

  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.rapiddine} className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li

          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
          
        </li>
        <li
          onClick={() => {
            setMenu("menu");
            navigate("/")
          }}
          className={menu === "menu" ? "active" : ""}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
            navigate("/")
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          <a href="#app-download">App Download</a>
        </li>
        <li
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          <a href="#footer">Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
