import React from "react";
import Logo from "../resources/exsolocutedbgremoved.png";

const Footer = (props) => {
    const handleClick = (thingToHandle) => {
        if (thingToHandle === 'handleImpressum') {
            console.log('Impressum');
            props.handleImpressum();
        } else if (thingToHandle === 'handleAGB') {
            console.log('AGB');
            props.handleAGB();
        }
    };

    return (
        <div className="footer">
            <img id="footerLogo" src={Logo} alt="Logo" />
            <div className="links" id="linksFooter">
                <p onClick={() => handleClick('handleImpressum')} >Impressum</p>
                <p onClick={() => handleClick('handleAGB')}>AGBs</p>
                <p>office@exSolutions.at</p>
            </div>
            <p id="nameTagFooter">
                © 2024 EXSOLUTION
            </p>
        </div>
    );
};

export default Footer;
