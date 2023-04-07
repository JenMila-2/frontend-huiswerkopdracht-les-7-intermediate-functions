// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

//Stappen en aandachtspunten:
//1: Input is cijfers van studenten. De array is al aangemaakt, array is grades.
//2: De cijfers van de studenten moeten gecontroleerd worden door te itereren. Output moet het aantal studenten met een cijfer 8 of hoger zijn. Wanneer er een 8 of hoger vinden (if statement gebruiken) dan geldt dit als een cum laude en horen we dit bij te houden (we houden alle cum laude bij).
//3: De uitslag moet bewaard worden in een nieuwe variable result of highGrades.
//4: Aantal studenten met een cijfer 8 of hoger moet gelogged worden in de terminal via console.log.

// ---- Verwachte uitkomst: 6

//In de opdrachten gebruik ik arr (als afkorting voor array) als parameter
//Arrow funtie en filter gebruikt om de code kort te houden
const highScore = grades.filter(grades => grades >= 8);
//Variable highScore resulteert in array [9, 8, 9, 8, 8, 8]. We willen weten wat de lengte is van deze array dus moeten we highScore.length loggen.
console.log(highScore); //De nieuwe array na het toepassen van een filter
console.log(highScore.length);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

//filter() functie gebruikt om door de array te filteren en te zoeken naar cijfers van 8 en hoger.
function cumLaude(arr) {
    const highGrades = arr.filter(grades => grades >= 8);
    console.log("Number of students who will receive a Cum Laude diploma: " + highGrades.length);
    return highGrades;
}
//Resultaat als we de grades array gebruiken
console.log(cumLaude(grades));
//Resultaat als we een andere array gebruiken
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

//Stappen en aandachtspunten:
//1: Eerst moet de array gecontroleerd worden. Wat zijn de individuele waardes van de array.
//2: Vervolgens moet de length van de array gecontroleerd worden.
//3: Nu we zowel de lengte als de individuele waardes hebben kunnen we een berekening maken.
//4: De individuele waardes moeten allemaal bij elkaar opgeteld worden.
//5: Vervolgens moet de som van de individuele waardes gedeeld worden door het aantal waardes in de array, de length.
//6: Het resultaat van som gedeeld door waarde moet worden gelogged in de terminal via console.log.

//Aantal studenten in de array, geprint voor mijn eigen visualisatie
const totalStudents = grades.length;
console.log("Total students: " + totalStudents);
let result = 0;

for (let i = 0; i < grades.length; i++) {
    result += grades[i] / grades.length;
}
console.log("The average grade this year is: " + result);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const resultAverage = sum / arr.length;
    return resultAverage;
}
//In deze opdracht ervoor gekozen om averageGrade op te slaan in een variable en vervolgens te loggen.
const averageGradeThisYear = averageGrade(grades);
console.log(averageGradeThisYear);
//Test met andere arrays
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//Bij functie toFixed kun je een getal (fractionDigits) invoeren, is het aantal decimalen.
//Dit is een korte versie, mag het ook zo geschreven worden of moet hier een functie(){} voor geschreven worden?
const roundedAverage = (averageGrade(grades)).toFixed(2);
console.log(roundedAverage);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//Stappen en aandachtspunten
//Stap 1: We moeten alle cijfers in de array controleren op hun specifieke waarde (hoogte van de cijfers/hoogste getal).
//Stap 2: Vervolgens moeten we controleren wat de hoogste cijfer is in de array door middel van een functie.
//Stap 3: De uitkomst moet worden gelogged via een console.log


// ---- Verwachte uitkomst: 9

//Functie Math.max.apply gebruikt, mag dit?
const highestStudentGrade = Math.max.apply(null, grades);
console.log(highestStudentGrade);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(arr) {
    let highest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
}
const resultHighestGrade = highestGrade(grades);
console.log(resultHighestGrade);
//Test met andere arrays
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));

//Kan ook zo uitgevoerd worden
/*function highestGrade(arr) {

    const highestStudentGrade = Math.max.apply(null, arr);
    return highestStudentGrade;
}
console.log(highestGrade([8, 9, 4, 6, 10]));*/
