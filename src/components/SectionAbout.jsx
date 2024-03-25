import React from "react";
import img from "../resources/section3.png";

const SectionAbout = () => {
  return (
    <>
      <div id={"about"} className={"section sectionAbout"}>
        <div className={"halfDiv"}>
          <img src={img} className={"image"} />
        </div>
        <div className={"halfDiv"}>
          <div className={"textDiv"}>
            <h2 className={"sec3"}>Über uns</h2>
            <p>
                Unser Team besteht aus einem engagierten Zusammenschluss erfahrener Webentwickler, kreativer Webdesigner und versierter Online-Marketing-Experten. Wir sind immer auf dem neuesten Stand der Technik und setzen auf innovative Lösungen, um unseren Kunden bestmöglich zu dienen.
            </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
