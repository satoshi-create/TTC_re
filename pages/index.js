import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Company from "../components/Company";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Map from "../components/Map";
const Home = () => {
  return (
    <React.StrictMode>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Company />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
};

export default Home;
