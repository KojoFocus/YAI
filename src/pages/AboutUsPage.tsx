// src/pages/AboutUsPage.tsx

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full p-0 font-lora">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-green-700 to-green-800 w-full py-4 fixed top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-8">
          <a href="/" className="text-white text-2xl font-bold">
            Focus Farms
          </a>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="py-16 bg-white w-full m-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Focus Farms is a sustainable beekeeping initiative dedicated to
            supporting local communities and promoting eco-friendly practices in
            agriculture. We aim to produce high-quality honey, provide training
            in beekeeping, and empower farmers with the tools and knowledge to
            engage in sustainable farming.
          </p>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to promote sustainable farming practices, empower
            smallholder farmers, and provide high-quality honey products to
            consumers. Through training and resources, we aim to improve
            livelihoods and protect the environment by supporting pollinators.
          </p>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700">
            We envision becoming the leading provider of eco-friendly honey
            products in Ghana, contributing to the well-being of farmers and
            communities while safeguarding the environment for future generations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Focus Farms. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
