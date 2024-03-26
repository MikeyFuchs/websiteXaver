import React from "react";
import Footer from "./Footer";
import SecundaryHeader from "./SecundaryHeader.jsx";
const AGB = () => {

  const handleImpressum = () => {
    setImpressum(true);
  }


  return (
    <div>
      <SecundaryHeader />
      <div className={"agb"}>
        <h1>Allgemeine Geschäftsbedingungen</h1>

        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
          Lieferungen und sonstige Leistungen der Beispielsoftware GmbH,
          nachfolgend Anbieter genannt.
        </p>

        <h2>2. Leistungen</h2>
        <p>
          Der Anbieter bietet Softwarelösungen im Bereich XYZ an. Die genauen
          Leistungen ergeben sich aus der jeweiligen Leistungsbeschreibung.
        </p>

        <h2>3. Preise und Zahlungsbedingungen</h2>
        <p>
          Die Preise richten sich nach der aktuellen Preisliste des Anbieters.
          Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
          Zahlungen sind innerhalb von 30 Tagen nach Rechnungsdatum fällig,
          sofern nicht anders vereinbart.
        </p>

        <h2>4. Lieferung und Leistungszeitpunkt</h2>
        <p>
          Die Lieferung erfolgt elektronisch per Download oder auf einem
          physischen Datenträger. Der Leistungszeitpunkt richtet sich nach der
          jeweiligen Vereinbarung mit dem Kunden.
        </p>

        <h2>5. Gewährleistung und Haftung</h2>
        <p>
          Der Anbieter gewährleistet, dass die Software zum Zeitpunkt der
          Übergabe die vereinbarten Eigenschaften aufweist und frei von
          Sachmängeln ist. Die Haftung des Anbieters beschränkt sich auf Vorsatz
          und grobe Fahrlässigkeit.
        </p>

        <h2>6. Datenschutz</h2>
        <p>
          Der Anbieter verpflichtet sich, die datenschutzrechtlichen
          Bestimmungen einzuhalten. Nähere Informationen zum Datenschutz finden
          Sie in unserer Datenschutzerklärung.
        </p>

        <h2>7. Schlussbestimmungen</h2>
        <p>
          Erfüllungsort und Gerichtsstand für alle Streitigkeiten aus diesem
          Vertrag ist der Sitz des Anbieters, sofern der Kunde Kaufmann oder
          eine juristische Person des öffentlichen Rechts ist. Es gilt das Recht
          der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
        </p>

        <p>
          Diese AGB sind urheberrechtlich geschützt und dürfen ohne Zustimmung
          des Anbieters nicht kopiert oder anderweitig verwendet werden.
        </p>
      </div>
      <Footer
          handleImpressum={()=> handleImpressum()}
      />
    </div>
  );
};

export default AGB;
