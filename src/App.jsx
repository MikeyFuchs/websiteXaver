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
import Impressum from "./components/Impressum.jsx";

const App = () => {
    const [agb, setAgb] = React.useState(false);
    const [impressum, setImpressum] = React.useState(false);
    const handleAGB = () => {
        setAgb(true);
    }
    const handleImpressum = () => {
        console.log('Impressum');
        setImpressum(true);
    }

    // Überprüfung der AGB-Zustand und Rückgabe entsprechender JSX
    if (!agb && !impressum) {
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
                <Footer
                    handleAGB={()=> handleAGB()}
                    handleImpressum={()=> handleImpressum()}
                />
            </div>
        );
    } else if (agb) {
        return (
            <AGB />
        );
    } else if (impressum) {
        return (
            <Impressum />
        );
    }
};

export default App;
