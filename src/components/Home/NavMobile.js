import React, { useState } from "react";

import BarsIcon from "../../assets/img/bars.png";
import CloseIcon from "../../assets/img/close.png";
import { Link } from "react-router-dom";


const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden relative z-20">
      {/* menue icon */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={BarsIcon} alt="" />
      </button>
      <ul
        className={`${isOpen ? "right-0" : "-right-full"
          } bg-dark fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* close button*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-6 left-6"
        >
          <img src={CloseIcon} alt="" />
        </button>
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

export default NavMobile;
