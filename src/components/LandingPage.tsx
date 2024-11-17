// src/components/LandingPage.tsx
import { useState, useEffect } from "react";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";

// Import the video at the top of the file
import productionVideo from '../assets/production.mp4';
import hivemanagementVideo from '../assets/hivemanagements.mp4';

const LandingPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    return () => {
      // Clean up if necessary
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between w-full m-0 p-0">
      {/* Navbar */}
      <nav className="bg-green-800 p-4">
        <div className="flex justify-between items-center w-full">
          <a href="#" className="text-white text-2xl font-bold">
            Focus Farms
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white text-lg">
              About
            </a>
            <a href="#services" className="text-white text-lg">
              Services
            </a>
            <a href="#shop" className="text-white text-lg">
              Shop
            </a>
            <a href="#contact" className="text-white text-lg">
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-white"
            id="navbar-toggle"
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
        {/* Mobile menu */}
        <div
          id="navbar-menu"
          className={`md:hidden ${isMenuVisible ? "block" : "hidden"}`}
        >
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="#about" className="text-white text-lg">
              About
            </a>
            <a href="#services" className="text-white text-lg">
              Services
            </a>
            <a href="#shop" className="text-white text-lg">
              Shop
            </a>
            <a href="#contact" className="text-white text-lg">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-green-600 text-white w-full py-20" id="home">
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Focus Farms</h1>
          <p className="text-xl mb-8">
            Sustainable Beekeeping Solutions for a Healthier Tomorrow.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white w-full m-0">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-6 text-green-800 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Focus Farms is dedicated to promoting sustainable farming practices
            and supporting local communities through eco-friendly beekeeping.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 w-full m-0">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Beekeeping Training */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Beekeeping Training</h3>
              <p className="text-gray-700">
                We offer professional training on sustainable beekeeping practices to empower local farmers.
              </p>
            </div>

            {/* Honey Production */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Honey Production</h3>
              <p className="text-gray-700">
                We produce eco-friendly, high-quality honey sourced from our hives and local partners.
              </p>
              <video
                controls
                className="w-full mt-4 rounded-lg"
              >
                <source src={productionVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Hive Management */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Hive Management</h3>
              <p className="text-gray-700">
                We provide expert hive management services to ensure optimal honey production and healthy bee colonies.
              </p>
              <video
                controls
                className="w-full mt-4 rounded-lg"
              >
                <source src={hivemanagementVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 w-full m-0">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={product1}
                alt="Product 1"
              />
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Focus Pure Honey
              </h3>
              <p className="text-gray-700">
                High-quality and eco-friendly. 
              </p>
              <p className="text-lg font-semibold text-green-800 mb-4">
                Price: GH¢65
              </p>
              <button className="bg-green-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={product2}
                alt="Product 2"
              />
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Focus Ginger-Honey
              </h3>
              <p className="text-gray-700">
                Premium quality for a sustainable lifestyle.
              </p>
              <p className="text-lg font-semibold text-green-800 mb-4">
                Price: GH¢80
              </p>
              <button className="bg-green-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={product1}
                alt="Product 3"
              />
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Product 3
              </h3>
              <p className="text-gray-700">
                Experience unmatched quality and freshness.
              </p>
              <p className="text-lg font-semibold text-green-800 mb-4">
                Price: GH¢100
              </p>
              <button className="bg-green-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-800 text-white py-16 w-full m-0">
        <div className="w-full text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-xl mb-8">We'd love to hear from you!</p>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-4 w-full m-0">
        <div className="w-full text-center">
          <p>&copy; 2024 Focus Farms. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
