import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-row items-center justify-between px-4 md:px-[100px] py-[10px] border-b border-[#d2cfcf]">
      <div className="heading">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo Text"
          className="h-[32px] md:h-[48px] leading-6"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="navlink hidden md:block">
        <ul className="flex flex-row items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black font-[500] leading-6"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black font-[500] leading-6"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black font-[500] leading-6"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black font-[500] leading-6"
              }
            >
              Github
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="buttons hidden md:flex flex-row gap-3 items-center">
        <button
          type="button"
          className="border-[5px] border-transparent rounded-lg px-4 py-2 active:border-[5px] hover:border-[#e7e6e6] hover:bg-[#e7e6e6] cursor-pointer text-[14px] font-[500] leading-5 active:border-[#c7c6c6] active:bg-[cbc9c9]"
        >
          Login
        </button>
        <button
          type="button"
          className="border-[5px] border-transparent bg-red-500 text-white active:border-[5px] active:border-amber-400 cursor-pointer text-[14px] font-[500] leading-5 rounded-lg px-4 py-2"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-opacity ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#d2cfcf] md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black font-[500] leading-6"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black font-[500] leading-6"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black font-[500] leading-6"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black font-[500] leading-6"
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col gap-3 items-center pb-4">
            <button
              type="button"
              className="border-[5px] border-transparent rounded-lg px-4 py-2 active:border-[5px] hover:border-[#e7e6e6] hover:bg-[#e7e6e6] cursor-pointer text-[14px] font-[500] leading-5 active:border-[#c7c6c6] active:bg-[#cbc9c9]"
            >
              Login
            </button>
            <button
              type="button"
              className="border-[5px] border-transparent bg-red-500 text-white active:border-[5px] active:border-amber-400 cursor-pointer text-[14px] font-[500] leading-5 rounded-lg px-4 py-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
