import React from "react";
import Communities from "../components/Communities";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowWork from "../components/HowWork";
import Properties from "../components/Properties";
import Search from "../components/Search";
import Testomonial from "../components/Testomonial";
import WhyUs from "../components/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Search />
      <WhyUs />
      <Properties />
      <Communities />
      <HowWork />
      <Testomonial />
      <Experience />
      <Footer />
    </div>
  );
};

export default HomePage;
