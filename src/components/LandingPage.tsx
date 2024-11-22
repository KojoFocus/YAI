// src/components/LandingPage.tsx


import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import productionVideo from "../assets/production.mp4";
import hivemanagementVideo from "../assets/hivemanagements.mp4";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const LandingPage = () => {
 
  // Scroll to About section
  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById("about");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col justify-between w-full m-0 p-0 font-lora">
     
<NavBar/>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      {/* <section id="about" className="py-16 bg-white w-full m-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Focus Farms is dedicated to promoting sustainable farming practices
            and supporting local communities through eco-friendly beekeeping.
          </p>
          <button
            className="text-green-600 font-semibold text-lg"
            onClick={scrollToAbout}
          >
            Learn More
          </button>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 w-full m-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Beekeeping Training</h3>
              <p className="text-gray-700">
                We offer professional training on sustainable beekeeping practices to empower local farmers.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Honey Production</h3>
              <p className="text-gray-700">
                We produce eco-friendly, high-quality honey sourced from our hives and local partners.
              </p>
              <video controls className="w-full mt-4 rounded-lg">
                <source src={productionVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Hive Management</h3>
              <p className="text-gray-700">
                We provide expert hive management services to ensure optimal honey production and healthy bee colonies.
              </p>
              <video controls className="w-full mt-4 rounded-lg">
                <source src={hivemanagementVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 w-full bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={product1} alt="Pure Honey" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-bold text-green-700 mb-4">Pure Honey</h3>
              <p className="text-gray-700 mb-4">Our 100% pure, organic honey sourced from local beekeepers.</p>
              <p className="text-xl font-semibold text-green-700 mb-4">$15.00</p>
              <button className="bg-green-800 text-white py-2 px-6 rounded-lg mt-4">Buy Now</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={product2} alt="Honey Infusions" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-bold text-green-700 mb-4">Honey Infusions</h3>
              <p className="text-gray-700 mb-4">A unique range of honey infusions with natural flavors like ginger and cinnamon.</p>
              <p className="text-xl font-semibold text-green-700 mb-4">$18.00</p>
              <button className="bg-green-800 text-white py-2 px-6 rounded-lg mt-4">Buy Now</button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-4">Beeswax Products</h3>
              <p className="text-gray-700 mb-4">Natural beeswax for candles, balms, and other eco-friendly products.</p>
              <p className="text-xl font-semibold text-green-700 mb-4">$12.00</p>
              <button className="bg-green-800 text-white py-2 px-6 rounded-lg mt-4">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Reach out to us for inquiries, partnerships, or training requests. We are here to help!
          </p>
          <button className="bg-green-800 text-white py-2 px-6 rounded-lg">Get In Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 mt-0 text-center">
        <p>&copy; 2024 Focus Farms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
