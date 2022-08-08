import React,{useEffect} from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import Button from "../UI/button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000,
        });
    }, [])
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box"  data-aos='fade-down'>
          <h4>About Us</h4>
          <div className="footer-links">
          <p className='u-text-small u-text-light' data-aos='fade-left'>
           EXTRON engages in Engineering, Project Mgt, procurement, Construction, Telecoms and procurement.
            </p>
          </div>
        </div>
        <div className="footer-box" data-aos='fade-up'>
          <h4>Support</h4>
          <div className="footer-links">
          <ul >
                    <li><a href="#"> Home </a> </li>
                    <li><a href="#subscribe"> About </a></li>
                    <li><a href="#features"> Services </a></li>
                    <li><a href="#community"> Model </a></li>
                    <li><a href="#footer"> Contact </a></li>
                    {/* <li className='nav-btn'>
                        <a href="#" className='btn btn-dark'> get Started </a>
                    </li> */}
                    
                </ul>
          </div>
        </div>
        <div className="footer-box" data-aos='fade-down'>
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            {/* <p>
              <FaMapMarkerAlt /> &nbsp; Address: Abuja, Nigeria.
            </p> */}
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +234 08037827181.
            </p>
            <p>
              <FaEnvelope /> &nbsp; info@extronng.com, 
            </p>
            <p>
              <FaGlobe /> &nbsp;  www.extronng.com
            </p>
          </div>
        </div>
        <div className="footer-box" data-aos='fade-up'>
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2022.  Extron NIGERIA LIMITED</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;