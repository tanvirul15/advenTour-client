import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark px-5'>
      <Link className='navbar-brand' to='/'>
        {user.displayName}
      </Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/packages'>
              Packages
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/reviews'>
              Review
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/admin'>
              Admin
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link ' to='/submitReview'>
              Submit a Review
            </Link>
          </li>

          {user.displayName ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link ' to='/myPackages'>
                  My Packages
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link className='nav-link btn btn-primary me-5' to='/login'>
                Log In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
