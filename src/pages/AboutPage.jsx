import React from "react";
import Agents from "../components/Agents";
import Counter from "../components/Counter";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowWork from "../components/HowWork";
import TopAbout from "../components/TopAbout";

const About = () => {
  return (
    <>
      <Header />
      <TopAbout page={"About Us"} />
      <Experience />
      <Counter />
      <HowWork />
      <Agents />
      <Footer />
    </>
  );
};

export default About;
