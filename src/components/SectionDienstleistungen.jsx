import React, { useEffect, useRef } from "react";
import img from "../resources/section2.png"; // Import des Bildes

const SectionDienstleistungen = () => {
  return (
    <div id={"dienstleistungen"} className={"section dienstleistungen"}>
      <div className={"halfDiv flyInLeft "}>
        <div className={"textDiv"}>
          <h2 id={"sec2"}>Dienstleistungen</h2>
          <p>
            Wir entwickeln moderne, responsive Websites, die auf Ihre
            individuellen Bedürfnisse zugeschnitten sind. Von der Konzeption und
            Gestaltung bis hin zur Entwicklung und Wartung bieten wir Ihnen
            alles aus einer Hand.
          </p>

            <p>
                Gerne beraten wir Sie unverbindlich zu unseren Dienstleistungen.


            </p>
        </div>
      </div>
      <div className={"halfDiv flyInRight"}>
        <div className={"imgDiv"}>
          <img src={img} alt="section2" />{" "}
          {/* Verwenden Sie die importierte img-Variable */}
        </div>
      </div>
    </div>
  );
};

export default SectionDienstleistungen;
