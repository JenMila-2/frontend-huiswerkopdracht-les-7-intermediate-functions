// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    //Eerst moet de index van de @ teken gevonden worden, verschilt namelijk per emailadres.
    const indexDomain = email.indexOf('@');
    //Onderstaande print de string achter het @ symbool, dus de domeinnamen.
    return email.slice(indexDomain + 1);
}
console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    const emailType = email;

    //Match functie gebruikt om de domeinnamen te controleren
    //Gekozen om niet een else if voor de ..@outlook.com mailadressen te maken maar een else voor alles wat niet match met @novi-education en @novi.nl. Dit gaat waarschijnlijk problemen opleveren als een user invalide tekst invoert (bijv. geen email etc.)??
    if (emailType.match("@novi-education.nl")) {
        console.log("Student");
    } else if (emailType.match("@novi.nl")) {
        console.log("Medwerker")
    } else {
        console.log("Extern");
    }
    return emailType;
}
typeOfEmail("n.eeken@novi-education.nl");
typeOfEmail("t.mellink@novi.nl");
typeOfEmail("novi.nlaapjesk@outlook.com");
typeOfEmail("a.wiersma@outlook.com");
// Kan ook aan de hand van een console.log worden gelogged: console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Controleert een email op juiste format via standaard richtlijnen en te controleren op specifieke tekens.
    //Dit had waarschijnlijk ook met includes() opgelost kunnen worden, maar de code hierboven is korter.
    if (email.match(validEmailFormat)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));
