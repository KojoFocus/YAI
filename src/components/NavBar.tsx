import { useState } from "react";
import logo from "../assets/logo3.png";

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="bg-white w-full py-4 fixed top-0 z-50 shadow">
      <div className="flex justify-between items-center w-full px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-green-700 text-2xl font-bold">
        <img
  src={logo}
  alt="Focus Farms logo"
  className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] object-contain"
/>

          <span>Focus Farms</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-green-700 text-lg">
            About
          </a>
          <a href="#services" className="text-green-700 text-lg">
            Services
          </a>
          <a href="#shop" className="text-green-700 text-lg">
            Shop
          </a>
          <a href="#contact" className="text-green-700 text-lg">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuVisible ? "block" : "hidden"
        } bg-green-50 text-green-700`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#about" className="text-lg">
            About
          </a>
          <a href="#services" className="text-lg">
            Services
          </a>
          <a href="#shop" className="text-lg">
            Shop
          </a>
          <a href="#contact" className="text-lg">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
