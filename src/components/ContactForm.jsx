import React from "react";

const ContactForm = () => {
  return (
    <div id={'contact'} className={"section contactForm"}>
      <h2 className={"sec3"}>Kontaktieren Sie uns</h2>
      <form>
          <div className={'inputDiv'}>
              <div className={"leftInput"}>
                  <input type="text" placeholder="Name"/>
                  <input type="email" placeholder="Nachname"/>
                  <input type="text" placeholder="Email"/>
              </div>

              <textarea placeholder="Nachricht"/>
          </div>
          <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactForm;
