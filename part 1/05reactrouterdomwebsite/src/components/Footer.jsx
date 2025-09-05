import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 lg:px-[100px] py-[20px] lg:py-[10px] border-t border-[#d4d5d4] gap-8 lg:gap-0">
        <div className="image">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Not Found"
            className="h-[48px] lg:h-[64px] leading-6 w-auto"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[100px] mt-0 lg:mt-[50px] text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[14px] leading-5 font-semibold mb-4 lg:mb-0">
              RESOURCES
            </h2>
            <div className="mt-0 lg:mt-[20px] flex flex-col items-center md:items-start gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                Github
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[14px] leading-5 font-semibold mb-4 lg:mb-0">
              Follow Us
            </h2>
            <div className="mt-0 lg:mt-[20px] flex flex-col items-center md:items-start gap-3">
              <NavLink
                to="https://github.com/SouvikBuilds"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500"
                    : "font-[500] leading-6 cursor-pointer hover:text-gray-600"
                }
              >
                Github
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-500"
                    : "font-[500] leading-6 cursor-pointer hover:text-gray-600"
                }
              >
                Discord
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[14px] leading-5 font-semibold mb-4 lg:mb-0">
              LEGAL
            </h2>
            <div className="mt-0 lg:mt-[20px] flex flex-col items-center md:items-start gap-3">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "underline"
                    : "font-[500] leading-6 cursor-pointer hover:underline"
                }
              >
                Terms & Conditions
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-[30px] lg:mt-[60px] mx-4 lg:mx-[140px] border-t border-[#d4d5d4] p-5">
        <div>
          <h2 className="text-[14px] leading-5 text-[#6a6d6a] hover:underline text-center">
            © 2025SouvikBuilds. All Rights Reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
