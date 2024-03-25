import React from "react";
import Footer from "./Footer.jsx";
import SecundaryHeader from "./SecundaryHeader.jsx";

const Impressum = () => {

    const handleAGB = () => {
        setAgb(true);
    }


    return (
        <div className={'impressumDiv'}>
            <SecundaryHeader />
        <div className={"agb impressum"}>
            <h1>Impressum</h1>
            <p>Firmenname: Beispiel GmbH</p>
            <p>Anschrift: Musterstraße 123, 12345 Musterstadt</p>
            <p>Telefon: 01234-567890</p>
            <p>E-Mail: info@beispiel-gmbh.de</p>
            <p>Vertretungsberechtigte Personen: Max Mustermann (Geschäftsführer)</p>
            <p>Handelsregister: Amtsgericht Musterstadt, HRB 12345</p>
            <p>Umsatzsteuer-Identifikationsnummer: DE123456789</p>
            <p>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Max Mustermann</p>
        </div>
            <Footer
                handleAGB={()=> handleAGB()}
            />
        </div>
    )
}

export default Impressum;