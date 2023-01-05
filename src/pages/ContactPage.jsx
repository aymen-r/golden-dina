import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopAbout from "../components/TopAbout";

const ContactPage = () => {
  return (
    <>
      <Header />
      <TopAbout page={"Contact"} />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
