import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { menu, close, niranjan_logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-[100%] flex justify-between items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 transition easy-in-out"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[22px] font-bold cursor-pointer flex items-center gap-2">
            <img
              src={niranjan_logo}
              alt="Niranjan Logo"
              className="sm:block hidden"
            />
          </p>
        </Link>

        <ul className="hidden md:flex flex-row gap-5">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* Resume link for desktop view */}
          <li
            className={`${
              active === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("Resume")}
          >
            <a
              href="https://drive.google.com/file/d/1X1Yku-WCunmuKM7SO-pR9ElrWrKCd0qe/view?usp=drivesdk/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={showMenu ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          <div
            className={`${
              !showMenu ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-star flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setShowMenu(!showMenu);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {/* Resume link for mobile view */}
              <li
                className={`${
                  active === "Resume" ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setShowMenu(!showMenu);
                  setActive("Resume");
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1X1Yku-WCunmuKM7SO-pR9ElrWrKCd0qe/view?usp=drivesdk/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
