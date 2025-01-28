import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaPhoneAlt,
  FaUsersCog,
  FaHandshake,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkStyles = `relative text-gray-800 pb-1.5 hover:text-blue-950 after:content-[''] after:block after:h-[3px] after:mt-1 after:bg-blue-950 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`;

  return (
    <header className="bg-yellow-200 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">SahaConnect</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:hidden lg:flex space-x-16 text-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaHome className="inline mr-2 text-xl" /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaInfoCircle className="inline mr-2 text-xl" /> About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaUsers className="inline mr-2 text-xl" /> Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaPhoneAlt className="inline mr-2 text-xl" /> Contact Us
          </NavLink>
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaHandshake className="inline mr-2 text-xl" /> Our Partners
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaUsersCog className="inline mr-2 text-xl" /> Join Our Community
          </NavLink>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[1000px] border-t-1 border-gray-400" : "max-h-0"
        } bg-yellow-200 bg-opacity-50  backdrop-blur-lg shadow-lg`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaHome className="inline mr-2 text-xl" /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaInfoCircle className="inline mr-2 text-xl" /> About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaUsers className="inline mr-2 text-xl" /> Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaPhoneAlt className="inline mr-2 text-xl" /> Contact Us
          </NavLink>
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaHandshake className="inline mr-2 text-xl" /> Our Partners
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `${navLinkStyles} ${
                isActive ? "text-gray-800 after:scale-x-100" : ""
              }`
            }
          >
            <FaUsersCog className="inline mr-2 text-xl" /> Join Our Community
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
