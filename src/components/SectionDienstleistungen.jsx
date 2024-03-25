import React, { useEffect, useRef } from "react";
import img from "../resources/section2.png"; // Import des Bildes


const SectionDienstleistungen = () => {

  return (
      <div  id={'dienstleistungen'} className={"section dienstleistungen"}>
        <div className={"halfDiv flyInLeft "}>
          <div className={"textDiv"}>
            <h2 id={'sec2'}>Dienstleistungen</h2>
            <p>
              Wir bieten Ihnen eine Vielzahl an Dienstleistungen an. Unsere
              Dienstleistungen sind auf Ihre Bedürfnisse zugeschnitten. Wir
              unterstützen Sie bei der Umsetzung Ihrer Projekte und helfen Ihnen
              dabei, Ihre Ziele zu erreichen.
            </p>
            <p>
              Unsere Dienstleistungen umfassen unter anderem die Bereiche
              Softwareentwicklung, Webentwicklung, App-Entwicklung, Beratung und
              Schulung.
            </p>
          </div>
        </div>
        <div className={"halfDiv flyInRight"}>
          <div className={"imgDiv"}>
            <img src={img} alt="section2"/> {/* Verwenden Sie die importierte img-Variable */}
          </div>
        </div>
      </div>
  );
};

export default SectionDienstleistungen;
