import React from "react";
import Navbar from "../../navbar/Navbar";
import About from "../about/About";
import FeaturedPackage from "../featuredPackage/FeaturedPackage";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import TestimonialSection from "../testimonial/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <About />
      <FeaturedPackage />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
