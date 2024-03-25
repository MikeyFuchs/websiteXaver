import React from "react";
import project1 from "../resources/project01.png";
import project2 from "../resources/project02.png";
import project3 from "../resources/project03.png";

const SectionProducts = () => {
  return (
    <div id={'projekte'} className={"section lastProjects"}>
      <div className={"heading"}>
        <h2 className={'sec3'}>Unsere letzten Projekte</h2>
      </div>
      <div className={"projects"}>
        <div className={"project firstProject"}>
          <h4>Project 1</h4>
          <img src={project1} alt="project3" />
          <div className={"txt"}>
            <p>
              Wir präsentieren stolz unseren Online-Marktplatz, auf dem
              talentierte Künstler aus aller Welt ihre einzigartigen
              handgefertigten Kunstwerke präsentieren. Entdecken Sie eine
              vielfältige Auswahl an Kunstwerken und kaufen Sie direkt von den
              Künstlern.
            </p>
          </div>
        </div>
        <div className={"projectMiddle secondProject"}>
          <h4>Project 2</h4>
          <img src={project2} alt="project3" />
          <div className={"txt"}>
            <p>
              Entdecken Sie lokale Veranstaltungen auf unserer Plattform und
              kaufen Sie Tickets für Ihre Lieblingsveranstaltungen. Treten Sie
              unserer lebendigen Community bei und erhalten Sie exklusive
              Angebote für Veranstaltungen in Ihrer Nähe.
            </p>
          </div>
        </div>
        <div className={"project thirdProject"}>
          <h4>Project 3</h4>
          <img src={project3} alt="project3" />
          <div className={"txt"}>
            <p>
              Willkommen auf unserem Gesundheits- und Fitnessblog! Wir bieten
              wertvolle Ressourcen und Tipps, um Ihre Fitnessziele zu erreichen.
              Werden Sie Mitglied, um personalisierte Trainingspläne zu erhalten
              und sich mit Gleichgesinnten zu vernetzen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
