import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='information py-4 bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <h2 className='text-center mb-4'>INFORMATION</h2>
          <div className='col-lg-3'>
            <h5 className='info-heading'>Contact Us</h5>
            <ul className='text-small'>
              <li>Email :example@gmail.com</li>
              <li>Phone: +880154754</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h5 className='info-heading'>Customer Service</h5>
            <ul className='text-small'>
              <li>Security Policy</li>
              <li> Refund Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h5 className='info-heading'>Accounts</h5>
            <ul className='text-small'>
              <li>Customer Info</li>

              <li>Order</li>

              <li>Our Customers</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h5 className='info-heading'>Address</h5>
            <ul className='text-small'>
              <li>
                House # 4, Road # 1 Block - F, Banani <br />
                Dhaka -1213, Bangladesh.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
