import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.rapiddine} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            voluptatem asperiores fugiat! Error, repellat harum sequi culpa
            voluptatum quam veniam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Business</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul>
          <li>+91-7587100578</li>
          <li>contact@rapiddine.com</li>
        </ul>
      </div>
      </div>
      
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © RapidDine.com - All right reserved
      </p>
    </div>
  );
};

export default Footer;
