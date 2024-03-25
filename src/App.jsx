import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./style.css";
import SectionDienstleistungen from "./components/SectionDienstleistungen.jsx";
import SectionProducts from "./components/SectionProducts.jsx";
import SectionAbout from "./components/SectionAbout.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import AGB from "./components/AGB.jsx";

const App = () => {
    const [agb, setAgb] = React.useState(false);

    const handleAGB = () => {
        setAgb(true);
    }

    // Überprüfung der AGB-Zustand und Rückgabe entsprechender JSX
    if (!agb) {
        return (
            <div className="main">
                <Header />
                <div className="heroSection">
                    <Hero />
                </div>
                <SectionDienstleistungen />
                <SectionProducts />
                <SectionAbout />
                <ContactForm />
                <Footer handleAGB={()=> handleAGB()} />
            </div>
        );
    } else {
        return (
            <AGB />
        );
    }
};

export default App;
