import React from "react";
import Logo from "../resources/exsolocutedbgremoved.png";

const SecundaryHeader = () => {


  return (
    <div className={"Header"}>
      <img src={Logo} alt="Logo" className={"logo"} />
      <div className={"links"}>
        <a href={"#dienstleistungen"}>Dienstleistungen</a>
        <a href={"#projekte"}>Projekte</a>
        <a href={"#about"}>Über uns</a>
        <a href={"#contact"}>Kontakt</a>
      </div>
    </div>
  );
};

export default SecundaryHeader;
