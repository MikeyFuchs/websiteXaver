import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.css";
import SectionDienstleistungen from "./components/SectionDienstleistungen.jsx";
import SectionProducts from "./components/SectionProducts.jsx";
import SectionAbout from "./components/SectionAbout.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <div className={"main"}>
      <Header />
      <div className={"heroSection"}>
        <Hero />
      </div>
      <SectionDienstleistungen />
      <SectionProducts />
      <SectionAbout />
        <ContactForm />

        <Footer />
    </div>
  );
};

export default App;
