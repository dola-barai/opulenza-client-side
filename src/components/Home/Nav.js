import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="lg:flex">
      <ul className="lg:flex space-x-6 font-body font-semibold text-sm text-white">
        <li><Link
          to='/'
          smooth={true}
          offset={-120}
          activeClass="active"
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          Home
        </Link></li>
        <li><Link
          to='/about'
          smooth={true}
          offset={-120}
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          About Us
        </Link></li>
        <li><Link
          to='/menu'
          smooth={true}
          offset={-120}
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          Menu
        </Link></li>
        <li><Link
          to='/addMenu'
          smooth={true}
          offset={-120}
          activeClass="active"
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          Add a Menu
        </Link></li>
        <li><Link
          to='/contact'
          smooth={true}
          offset={-120}
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          Contact us
        </Link></li>
        <li><Link
          to='/booking'
          smooth={true}
          spy={true}
          className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
        >
          Booking
        </Link></li>

      </ul>
    </nav>
  );
};

export default Nav;
