import React from "react";
import img from "../resources/section3.png";

const SectionAbout = () => {
  return (
    <>
      <div id={'about'} className={'section sectionAbout'}>
        <div className={"halfDiv"}>
            <img src={img} className={"image"}/>
        </div>
        <div className={"halfDiv"}>
            <div className={"textDiv"}>
                <h2 className={'sec3'}>Über uns</h2>
                <p>
                    Bei EX Solutions sind wir darauf spezialisiert, Unternehmen online zum Erfolg zu führen. Unsere maßgeschneiderten Lösungen in Website-Design und Online-Marketing sind darauf ausgerichtet, die digitale Präsenz unserer Kunden zu maximieren und ihr Wachstum zu fördern. Vertraue auf unsere Expertise und begib dich mit uns auf den Weg zu deinem digitalen Erfolg.
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;