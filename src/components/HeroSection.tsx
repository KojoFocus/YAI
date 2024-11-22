import { useEffect } from "react";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

const HeroSection = () => {
  useEffect(() => {
    // Autoplay carousel logic
    const carousel = document.querySelector("#carousel") as HTMLElement;
    if (carousel) {
      const interval = parseInt(carousel.getAttribute("data-carousel-interval") || "3000", 10);
      let currentIndex = 0;
      const items = carousel.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;
      const totalItems = items.length;

      // Hide overflow and ensure only one item is shown at a time
      carousel.style.overflow = "hidden";
      items.forEach((item) => {
        item.style.flex = "none";
        item.style.width = "100%";
      });

      const intervalId = setInterval(() => {
        // Move to the next item
        currentIndex = (currentIndex + 1) % totalItems;
        carousel.scrollTo({
          left: items[currentIndex].offsetLeft,
          behavior: "smooth",
        });
      }, interval);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="relative text-white py-0 m-0">
      {/* Carousel Section */}
      <div
        id="carousel"
        className="carousel w-full h-screen sm:min-h-screen flex justify-center items-center overflow-hidden"
        data-carousel-interval="3000"
      >
        <div className="carousel-item w-full h-full">
          <img
            src={carousel1}
            className="object-cover w-full h-full"
            alt="carousel 1"
          />
        </div>
        <div className="carousel-item w-full h-full">
          <img
            src={carousel2}
            className="object-cover w-full h-full"
            alt="carousel 2"
          />
        </div>
        <div className="carousel-item w-full h-full">
          <img
            src={carousel3}
            className="object-cover w-full h-full"
            alt="carousel 3"
          />
        </div>
        <div className="carousel-item w-full h-full">
          <img
            src={carousel4}
            className="object-cover w-full h-full"
            alt="carousel 4"
          />
        </div>
        <div className="carousel-item w-full h-full">
          <img
            src={carousel5}
            className="object-cover w-full h-full"
            alt="carousel 5"
          />
        </div>
      </div>

      {/* Text Section Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 z-10 px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Welcome to Focus Farms
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
          Sustainable Beekeeping Solutions for a Healthier Tomorrow.
        </p>

        {/* Button Section */}
        <div className="w-full sm:w-auto">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg w-4/5 sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
