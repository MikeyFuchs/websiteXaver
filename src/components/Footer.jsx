import React from "react";
import Logo from "../resources/exsolocutedbgremoved.png";

const Footer = (props) => {
    const handleAGB = () => {
        props.handleAGB(); // Aufruf der handleAGB-Funktion von den Props
    };

    return (
        <div className="footer">
            <img id="footerLogo" src={Logo} alt="Logo"></img>
            <div className="links" id="linksFooter">
                <p>Impressum</p>
                <p onClick={handleAGB}>AGBs</p>
                <p>office@exSolutions.at</p>
            </div>
            <p id="nameTagFooter">
                © 2024 EXSOLUTION
            </p>
        </div>
    );
};

export default Footer;
