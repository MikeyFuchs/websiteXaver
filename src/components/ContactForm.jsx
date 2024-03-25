import React from "react";

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        const data = {
            name: inputs[0].value,
            lastName: inputs[1].value,
            email: inputs[2].value,
            message: textarea.value
        }
        console.log(data);
        inputs.forEach(input => input.value = '');
        textarea.value = '';

        alert('Nachricht gesendet');
    }
  return (
    <div id={'contact'} className={"section contactForm"}>
      <h2 className={"sec3"}>Kontaktieren Sie uns</h2>
      <form onSubmit={handleSubmit}>
          <div className={'inputDiv'}>
              <div className={"leftInput"}>
                  <input minLength={1} type="text" placeholder="Name"/>
                  <input minLength={1} type="text" placeholder="Nachname"/>
                  <input minLength={10}  type="email" placeholder="Email"/>
              </div>

              <textarea minLength={5} placeholder="Nachricht"/>
          </div>
          <button  type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactForm;
