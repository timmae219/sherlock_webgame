import ScreenController from "./screenController.js";

import {introText1, introText2, introText3, introText4,
    intro_rätsel_1,rätsel_1,rätsel_1_Möglichkeiten,rätsel_1_Lösung,rätsel_1_Antwort, rätsel_1_falsch,
    intro_rätsel_2,rätsel_2,rätsel_2_Möglichkeiten,rätsel_2_Lösung,rätsel_2_Antwort, rätsel_2_falsch,
    intro_rätsel_3,rätsel_3,rätsel_3_Möglichkeiten,rätsel_3_Lösung,rätsel_3_Antwort, rätsel_3_falsch,
    intro_rätsel_4,rätsel_4,rätsel_4_Möglichkeiten,rätsel_4_Lösung,rätsel_4_Antwort, rätsel_4_falsch,
    intro_rätsel_5,rätsel_5,rätsel_5_Möglichkeiten,rätsel_5_Lösung,rätsel_5_Antwort, rätsel_5_falsch,
    intro_rätsel_6,rätsel_6,rätsel_6_Möglichkeiten,rätsel_6_Lösung,rätsel_6_Antwort, rätsel_6_falsch,
    intro_rätsel_7,rätsel_7,rätsel_7_Möglichkeiten,rätsel_7_Lösung,rätsel_7_Antwort, rätsel_7_falsch,
    intro_rätsel_8,rätsel_8,rätsel_8_Möglichkeiten,rätsel_8_Lösung,rätsel_8_Antwort, rätsel_8_falsch,
    intro_pig, pig_catch, pig_fail,
    intro_hut_1, hut_1_win_1, hut_1_win_2, hut_1_win_3, hut_1_fail,
    intro_hut_2, hut_2_win_1, hut_2_win_2, hut_2_win_3, hut_2_fail,
    intro_shoot_1, shoot_1_win, shoot_1_fail,
    intro_shoot_2, shoot_2_win, shoot_2_fail,
    intro_bird, bird_win, bird_fail, genericHint, joker_1, joker_2} from "./strings.js";



/*
    Die Audio-Objekte der Musikstücke werden hier global definiert, damit man sie von überall starten und pausieren kann.
    Effekte werden "lokal" behandelt, da sie meistens nur kurz sind und nicht manuell gemutet werden müssen
*/

var mainTheme = new Audio('../assets/audio/background_1.mp3');

/*
    Hier kommt das ganze Game Handling rein

    Zu Debugzwecken kann man den initialen Screen hier abändern, damit man nicht immer bis zum gewünschten Punkt "spielen" muss.
*/
var screenController = new ScreenController('main');

// Labeling von Personen
const personLabeling = [
    {   //Thomas
        hairColor: "green",
        hairLength: "normal",
        older: false,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Oliver
        hairColor: "blonde",
        hairLength: "long",
        older: false,
        hat: true,
        glasses: false,
        accessoire: false
    },
    {   //Peter
        hairColor: "brown",
        hairLength: "long",
        older: false,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Klaus
        hairColor: "brown",
        hairLength: "normal",
        older: true,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //David
        hairColor: "blond",
        hairLength: "long",
        older: false,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //Albert
        hairColor: "black",
        hairLength: "normal",
        older: false,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Philip
        hairColor: "black",
        hairLength: "normal",
        older: true,
        hat: true,
        glasses: false,
        accessoire: false
    },
    {   //Ingrid
        hairColor: "brown",
        hairLength: "long",
        older: true,
        hat: false,
        glasses: true,
        accessoire: true
    },
    {   //Hannes
        hairColor: "black",
        hairLength: "short",
        older: true,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Simone
        hairColor: "red",
        hairLength: "normal",
        older: false,
        hat: true,
        glasses: true,
        accessoire: true
    },
    {   //Ute
        hairColor: "blond",
        hairLength: "long",
        older: false,
        hat: false,
        glasses: false,
        accessoire: true
    },
    {   //Michael
        hairColor: "white",
        hairLength: "normal",
        older: true,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //Tina
        hairColor: "blond",
        hairLength: "normal",
        older: false,
        hat: false,
        glasses: false,
        accessoire: true
    },
    {   //Stefan
        hairColor: "white",
        hairLength: "normal",
        older: true,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Elke
        hairColor: "black",
        hairLength: "short",
        older: true,
        hat: false,
        glasses: true,
        accessoire: true
    },
    {   //Katrin
        hairColor: "blond",
        hairLength: "short",
        older: false,
        hat: false,
        glasses: false,
        accessoire: true
    },
    {   //Doris
        hairColor: "red",
        hairLength: "normal",
        older: false,
        hat: false,
        glasses: false,
        accessoire: true
    },
    {   //Andreas
        hairColor: "white",
        hairLength: "normal",
        older: true,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //Tobias
        hairColor: "black",
        hairLength: "long",
        older: false,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //Manfred
        hairColor: "white",
        hairLength: "short",
        older: true,
        hat: false,
        glasses: true,
        accessoire: false
    },
    {   //Markus
        hairColor: "white",
        hairLength: "short",
        older: true,
        hat: false,
        glasses: false,
        accessoire: false
    },
    {   //Jörg
        hairColor: "brown",
        hairLength: "normal",
        older: false,
        hat: true,
        glasses: false,
        accessoire: false
    },
    {   //Patrick
        hairColor: "brown",
        hairLength: "short",
        older: false,
        hat: true,
        glasses: false,
        accessoire: false
    },
    {   //Alfred
        hairColor: "red",
        hairLength: "normal",
        older: true,
        hat: false,
        glasses: false,
        accessoire: false
    }    
];

const quizzes = [
    {
        introText: rätsel_1,
        correctAnswer: 4,
        answers: [
            '(A) der grüne und der blaue.',
            '(B) der grüne und der rote.',
            '(C) der weiße und der blaue.',
            '(D) der grüne und der weiße.',
            '(E) der rote und der blaue.'
        ],
        successSentence: rätsel_1_Antwort,
        failSentence: rätsel_1_falsch
    },
    {
        introText: rätsel_2,
        correctAnswer: 3,
        answers: [
            '(A) Elektriker',
            '(B) Klempner',
            '(C) Maler',
            '(D) Fliesenleger',
            '(E) Das ist nicht eindeutig bestimmt'
        ],
        successSentence: rätsel_2_Antwort,
        failSentence: rätsel_2_falsch
    },
    {
        introText: rätsel_3,
        correctAnswer: 0,
       
        answers: [
            '(A) 25 % von 16',
            '(B) 18 % von 20',
            '(C) 15 % von 26',
            '(D) 10 % von 30',
            '(E) 36 % von 12'
        ],
        successSentence: rätsel_3_Antwort,
        failSentence: rätsel_3_falsch
    },
    {
        introText: rätsel_4,
        correctAnswer: 1,
        answers: [
            '(A) Dwarf',
            '(B) Knarf',
            '(C) Raawf',
            '(D) Drowf'
        ],
        successSentence: rätsel_4_Antwort,
        failSentence: rätsel_4_falsch
    },
    {
        introText: rätsel_5,
        correctAnswer: 1,
        answers: [
            '(A) genau 4 Dienstage',
            '(B) genau 4 Mittwoche',
            '(C) 5 Donnerstage',
            '(D) 5 Freitage',
            '(E) 5 Samstage'
        ],
        successSentence: rätsel_5_Antwort,
        failSentence: rätsel_5_falsch
    },
    {
        introText: rätsel_6,
        correctAnswer: 2,
        answers: [
            '(A) 11',
            '(B) 12',
            '(C) 8',
            '(D) 13',
            '(E) 9'
        ],
        successSentence: rätsel_6_Antwort,
        failSentence: rätsel_6_Antwort
    },
    {
        introText: rätsel_7,
        correctAnswer: 4,
        answers: [
            '(A) als Letzter',
            '(B) als Vierter',
            '(C) als Dritter',
            '(D) als Zweiter',
            '(E) als Erster'
        ],
        successSentence: rätsel_7_Antwort,
        failSentence: rätsel_7_falsch
    },
    {
        introText: rätsel_8,
        correctAnswer: 1,
        answers: [
            '(A) 100',
            '(B) 256',
            '(C) 768',
            '(D) 2048',
            '(E) 4096'
        ],
        successSentence: rätsel_8_Antwort,
        failSentence: rätsel_8_falsch
    }
    
];

// Zuordnung von Events/Rätseln/Spielen zu den Häusern (Wald und Cabanon sind fixe Events!)
var houseEventMapping = {};

var housePersonMapping = {};

var murderer;

var shiftLock = "open";

var remainingHours = 9;

var currentlySelectedLocation;

// 24 bool-Werte, die signalisieren, ob eine Person als unschuldig markiert wurde, oder nicht
var personSelectionArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

var alreadyVisitedMapping = {
    'house1':false,
    'house2':false,
    'house3':false,
    'house4':false,
    'house5':false,
    'house6':false,
    'house7':false,
    'house8':false,
    'house9':false,
    'house10':false,
    'house11':false,
    'house12':false,
    'cabanon': false,
    'forest': false
};

var hints = [];

/*
    Spiel-Kontrollfluss
*/
//handleIntroScreen();
gotoMainScreen();
initializeMurderer();
initializeHouseEventMapping();
initializePersonHouseMapping();
initializeHints();

function initializeMurderer(){
    let randIndex = Math.floor(Math.random() * personSelectionArray.length);
    murderer = randIndex;
    console.log(`MURDERER: ${murderer}`);
}

function initializeHints(){
    let hairColors = ["green", "blonde", "brown", "black", "red", "white"].filter((element) => element !== personLabeling[murderer].hairColor);
    let hairLengths = ["short", "normal", "long"].filter((element) => element !== personLabeling[murderer].hairLength);
    let notOlder = !personLabeling[murderer].older;
    let notHat = !personLabeling[murderer].hat;
    let notGlasses = !personLabeling[murderer].glasses;
    let notAccessoire = !personLabeling[murderer].accessoire;

    hairColors.forEach((hairColor) => {
        if(hairColor == "green"){hints = hints.concat(['grüne Haare']);}
        if(hairColor == "blonde"){hints = hints.concat(['blonde Haare']);}
        if(hairColor == "brown"){hints = hints.concat(['braune Haare']);}
        if(hairColor == "black"){hints = hints.concat(['schwarze Haare']);}
        if(hairColor == "red"){hints = hints.concat(['rote Haare']);}
        if(hairColor == "white"){hints = hints.concat(['weiße Haare']);}
    });

    hairLengths.forEach((hairLength) => {
        if(hairLength == "short"){hints = hints.concat(['für ihr Geschlecht kurze Haare']);}
        if(hairLength == "normal"){hints = hints.concat(['für ihr Geschlecht eine normale Haarlänge']);}
        if(hairLength == "long"){hints = hints.concat(['für ihr Geschlecht lange Haare']);}
    });

    hints = hints.concat(notOlder ? ['höheres Alter'] : ['jüngeres Alter']);
    hints = hints.concat(notHat ? ['trug eine Kopfbedeckung'] : ['trug keine Kopfbedeckung']);
    hints = hints.concat(notGlasses ? ['trug eine Sehhilfe'] : ['trug keine Sehhilfe']);
    hints = hints.concat(notAccessoire ? ['trug Schmuck/Accesoires'] : ['trug keinen Schmuck/Accesoires']);

    shuffle(hints);
    console.log(hints);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Diese Funktion setzt den Content, der im Panel angezeigt werden soll
function setGamePanelContent(screenName){
    screenController.currentScreen = screenName;
    document.getElementById("gamepanel").innerHTML= screenController.getScreenContent();
    if(screenName === 'intro'){
        document.getElementById('status-panel').style.visibility = "hidden";
        document.getElementById('intro-panel').classList.add('animation');
        document.getElementById('intro-panel').innerHTML = `<p>${introText1}</p>`;
        document.getElementById('intro-panel').onclick = function(){
            document.getElementById('intro-panel').classList.remove('animation');
            void document.getElementById('intro-panel').offsetWidth;    // Zeitliche Lückenfüller-Funktion, die das erneute Hinzufügen einer Klasse "sichtbar" wirksam macht
            document.getElementById('intro-panel').classList.add('animation');
            document.getElementById('intro-panel').innerHTML = `<p>${introText2}</p>`;
            document.getElementById('intro-panel').onclick = function(){
                document.getElementById('intro-panel').classList.remove('animation');
                void document.getElementById('intro-panel').offsetWidth;
                document.getElementById('intro-panel').classList.add('animation');
                document.getElementById('intro-panel').innerHTML = `<p>${introText3}</p>`;
                document.getElementById('intro-panel').onclick = function(){
                    document.getElementById('intro-panel').classList.remove('animation');
                    void document.getElementById('intro-panel').offsetWidth;
                    document.getElementById('intro-panel').classList.add('animation');
                    document.getElementById('intro-panel').innerHTML = `<p>${introText4}</p>`;
                    document.getElementById('intro-panel').onclick = function(){
                        gotoMainScreen();
                    }
                }
            }
        };
    }
    if(screenName === 'main'){
        console.log('entered main section in set gamepanel content method');
        document.getElementById('clock-div').style.backgroundImage = `url("assets/img/clock/clock_${remainingHours}.png")`;

        document.getElementById('status-panel').style.visibility = "visible";
        document.getElementById('status-panel').innerHTML = "Wähle einen Ort aus";
        document.getElementById('candidates-overlay').style.visibility = "hidden";
        document.getElementById('solve-overlay').style.visibility = "hidden";

        for(let location in alreadyVisitedMapping){
            if(alreadyVisitedMapping[location] === true){
                document.getElementById(`main-map-${location}`).innerHTML = `<img src="/assets/img/haken.png" id="overlay-mark">`;
            }
        }

        document.getElementById('main-map-house1').onclick = function(){handleClickOnLocation('house1');};
        document.getElementById('main-map-house2').onclick = function(){handleClickOnLocation('house2');};
        document.getElementById('main-map-house3').onclick = function(){handleClickOnLocation('house3');};
        document.getElementById('main-map-house4').onclick = function(){handleClickOnLocation('house4');};
        document.getElementById('main-map-house5').onclick = function(){handleClickOnLocation('house5');};
        document.getElementById('main-map-house6').onclick = function(){handleClickOnLocation('house6');};
        document.getElementById('main-map-house7').onclick = function(){handleClickOnLocation('house7');};
        document.getElementById('main-map-house8').onclick = function(){handleClickOnLocation('house8');};
        document.getElementById('main-map-house9').onclick = function(){handleClickOnLocation('house9');};
        document.getElementById('main-map-house10').onclick = function(){handleClickOnLocation('house10');};
        document.getElementById('main-map-house11').onclick = function(){handleClickOnLocation('house11');};
        document.getElementById('main-map-house12').onclick = function(){handleClickOnLocation('house12');};
        document.getElementById('main-map-cabanon').onclick = function(){handleClickOnLocation('cabanon');};
        document.getElementById('main-map-forest').onclick = function(){handleClickOnLocation('forest');};
        document.getElementById('main-map-show-candidates-button').onclick = handleClickOnShowCandidates;
        document.getElementById('main-map-solve-button').onclick = handleClickOnSolve;
    }
    if(screenName === 'easteregg'){
        console.log('entered easteregg section in set gamepanel content method');
        document.getElementById('confirm-button').onclick = function(){
            console.log(`HINTS: ${hints}`);
            setGamePanelContent('main');
            handleClickOnLocation(currentlySelectedLocation);
            let textToDisplay = getSuccessText(houseEventMapping[currentlySelectedLocation]);
            textToDisplay = textToDisplay.concat('Die Person hatte die folgende Eigenschaft <b><u>NICHT</u></b>: ');
            textToDisplay = textToDisplay.concat(hints[0]);
            tryShift();
            document.getElementById('speechbubble-div').innerHTML = `<p>${textToDisplay}</p></br><button id="back-to-map-button">OK</button>`;
            document.getElementById('back-to-map-button').onclick = function(){
                alreadyVisitedMapping[currentlySelectedLocation] = true;
                remainingHours -= 1;
                shiftLock = "open";
                setGamePanelContent('main');
                return;
            };
        };
    }
    if(screenName === 'joker'){
        console.log('entered joker section in set gamepanel content method');
        console.log(`HINTS: ${hints}`);
        handleClickOnLocation(currentlySelectedLocation);
        let textToDisplay = getSuccessText(houseEventMapping[currentlySelectedLocation]);
            textToDisplay = textToDisplay.concat('Die Person hatte die folgende Eigenschaft <b><u>NICHT</u></b>: ');
            textToDisplay = textToDisplay.concat(hints[0]);
            tryShift();
            document.getElementById('speechbubble-div').innerHTML = `<p>${textToDisplay}</p></br><button id="back-to-map-button">OK</button>`;
            document.getElementById('back-to-map-button').onclick = function(){
                alreadyVisitedMapping[currentlySelectedLocation] = true;
                remainingHours -= 1;
                shiftLock = "open";
                setGamePanelContent('main');
                return;
            };
    }
}

function tryShift(){
    if(shiftLock == "open"){
        hints.shift();
        shiftLock = "closed";
    }
}

function handleIntroScreen(){
    setGamePanelContent('intro');
}

function gotoMainScreen(){
    setGamePanelContent('main');
    mainTheme.loop = true;
    mainTheme.play();
}

function handleClickOnLocation(locationName){
    if(remainingHours <= 0){
        alert('Du hast keine Zeit mehr übrig, du musst den Täter jetzt schnell fassen!');
        setGamePanelContent('main');
        return;
    }
    setGamePanelContent("location");
    document.getElementById('gamepanel').style.backgroundColor = "transparent";
    document.getElementById('status-panel').style.visibility = "hidden";
    currentlySelectedLocation = locationName;
    if(alreadyVisitedMapping[locationName] === true){
        alert('Du hast diesen Ort bereits besucht!');
        setGamePanelContent('main');
        return;
    }
    if(locationName.includes('house')){
        let effect = new Audio('../assets/audio/opening_door_sound_effect.mp3');
        effect.play();
        document.getElementById('speechbubble-div').style.visibility = 'visible';
        document.getElementById('letter-div').style.visibility = "hidden";
        if(locationName === 'house1' || locationName === 'house5' || locationName === 'house9'){
            document.getElementById('location-div').style.backgroundImage = "url('assets/img/house_background1.jpg')";
            document.getElementById('person-div').style.gridRowStart = "10";
            document.getElementById('person-div').style.gridRowEnd = "22";
            document.getElementById('person-div').style.gridColumnStart = "12";
            document.getElementById('person-div').style.gridColumnEnd = "19";
            document.getElementById('speechbubble-div').style.gridRowStart = "5";
            document.getElementById('speechbubble-div').style.gridRowEnd = "12";
            document.getElementById('speechbubble-div').style.gridColumnStart = "19";
            document.getElementById('speechbubble-div').style.gridColumnEnd = "30";
        }
        if(locationName === 'house2' || locationName === 'house6' || locationName === 'house10'){
            document.getElementById('location-div').style.backgroundImage = "url('assets/img/house_background2.jpg')";
            document.getElementById('person-div').style.gridRowStart = "8";
            document.getElementById('person-div').style.gridRowEnd = "24";
            document.getElementById('person-div').style.gridColumnStart = "6";
            document.getElementById('person-div').style.gridColumnEnd = "15";
            document.getElementById('speechbubble-div').style.gridRowStart = "3";
            document.getElementById('speechbubble-div').style.gridRowEnd = "10";
            document.getElementById('speechbubble-div').style.gridColumnStart = "15";
            document.getElementById('speechbubble-div').style.gridColumnEnd = "26";
        }
        if(locationName === 'house3' || locationName === 'house7' || locationName === 'house11'){
            document.getElementById('location-div').style.backgroundImage = "url('assets/img/house_background3.png')";
            document.getElementById('person-div').style.gridRowStart = "8";
            document.getElementById('person-div').style.gridRowEnd = "24";
            document.getElementById('person-div').style.gridColumnStart = "6";
            document.getElementById('person-div').style.gridColumnEnd = "15";
            document.getElementById('speechbubble-div').style.gridRowStart = "3";
            document.getElementById('speechbubble-div').style.gridRowEnd = "10";
            document.getElementById('speechbubble-div').style.gridColumnStart = "15";
            document.getElementById('speechbubble-div').style.gridColumnEnd = "26";
        }
        if(locationName === 'house4' || locationName === 'house8' || locationName === 'house12'){
            document.getElementById('location-div').style.backgroundImage = "url('assets/img/house_background4.jpg')";
            document.getElementById('person-div').style.gridRowStart = "10";
            document.getElementById('person-div').style.gridRowEnd = "26";
            document.getElementById('person-div').style.gridColumnStart = "20";
            document.getElementById('person-div').style.gridColumnEnd = "29";
            document.getElementById('speechbubble-div').style.gridRowStart = "5";
            document.getElementById('speechbubble-div').style.gridRowEnd = "12";
            document.getElementById('speechbubble-div').style.gridColumnStart = "8";
            document.getElementById('speechbubble-div').style.gridColumnEnd = "19";
        }
        document.getElementById('person-div').style.backgroundImage = `url('assets/img/persons/person${housePersonMapping[locationName]}.png')`;
        document.getElementById('speechbubble-div').innerHTML = `${getIntroText(houseEventMapping[locationName])}</br><button id="start-event-button">OK</button>`;
        document.getElementById('start-event-button').onclick = function(){
            handleEvent(houseEventMapping[locationName]);
            document.getElementById('gamepanel').style.backgroundColor = "burlywood";
        };
    }
    if(locationName === 'cabanon'){
        // TODO: Knarzende Bretter-Soundeffekt
        document.getElementById('speechbubble-div').style.visibility = 'hidden';
        document.getElementById('letter-div').style.visibility = "visible";
        document.getElementById('status-panel').style.visibility = "visible";
        document.getElementById('status-panel').innerHTML = "Finde den Briefumschlag!";
        document.getElementById('letter-div').innerHTML = `<img src="assets/img/letter.png" id="letter-img-div">`;
        placeLetterRandomly();
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/cabanon_background.png')";
        document.getElementById('letter-div').onclick = function(){
            document.getElementById('letter-div').style.visibility = "hidden";
            document.getElementById('speechbubble-div').style.visibility = 'visible';
            let textToDisplay = 'Die Person hatte die folgende Eigenschaft <b><u>NICHT</u></b>: ';
            textToDisplay = textToDisplay.concat(hints[0]);
            console.log(`textToDisplay: ${textToDisplay}`);
            tryShift();
            document.getElementById('speechbubble-div').innerHTML = `<p>${textToDisplay}</p></br><button id="back-to-map-button">OK</button>`;
            document.getElementById('back-to-map-button').onclick = function(){
                alreadyVisitedMapping[currentlySelectedLocation] = true;
                remainingHours -= 1;
                shiftLock = "open";
                setGamePanelContent('main');
                return;
            };
        };
    }
    if(locationName === 'forest'){
        // TODO: Blätterrascheln-Soundeffekt
        document.getElementById('speechbubble-div').style.visibility = 'hidden';
        document.getElementById('letter-div').style.visibility = "visible";
        document.getElementById('status-panel').style.visibility = "visible";
        document.getElementById('status-panel').innerHTML = "Finde den Briefumschlag!";
        document.getElementById('letter-div').innerHTML = `<img src="assets/img/letter.png" id="letter-img-div">`;
        placeLetterRandomly();
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/forest_background.jpg')";
        document.getElementById('letter-div').onclick = function(){
            document.getElementById('letter-div').style.visibility = "hidden";
            document.getElementById('speechbubble-div').style.visibility = 'visible';
            let textToDisplay = 'Die Person hatte die folgende Eigenschaft <b><u>NICHT</u></b>: ';
            textToDisplay = textToDisplay.concat(hints[0]);
            console.log(`textToDisplay: ${textToDisplay}`);
            tryShift();
            document.getElementById('speechbubble-div').innerHTML = `<p>${textToDisplay}</p></br><button id="back-to-map-button">OK</button>`;
            document.getElementById('back-to-map-button').onclick = function(){
                alreadyVisitedMapping[currentlySelectedLocation] = true;
                remainingHours -= 1;
                shiftLock = "open";
                setGamePanelContent('main');
                return;
            };
        };
    }
}

function placeLetterRandomly(){
    let randomX = Math.floor(Math.random() * 800);
    let randomY = Math.floor(Math.random() * 500);
    document.getElementById('letter-div').style.left = `${randomX}px`;
    document.getElementById('letter-div').style.top = `${randomY}px`;
}

function handleClickOnBackToMap(){
    document.getElementById('candidates-overlay').style.visibility = "hidden";
    document.getElementById('solve-overlay').style.visibility = "hidden";
    document.getElementById('status-panel').style.visibility = "visible";
    document.getElementById('main-map-house1').style.visibility = "visible";
    document.getElementById('main-map-house2').style.visibility = "visible";
    document.getElementById('main-map-house3').style.visibility = "visible";
    document.getElementById('main-map-house4').style.visibility = "visible";
    document.getElementById('main-map-house5').style.visibility = "visible";
    document.getElementById('main-map-house6').style.visibility = "visible";
    document.getElementById('main-map-house7').style.visibility = "visible";
    document.getElementById('main-map-house8').style.visibility = "visible";
    document.getElementById('main-map-house9').style.visibility = "visible";
    document.getElementById('main-map-house10').style.visibility = "visible";
    document.getElementById('main-map-house11').style.visibility = "visible";
    document.getElementById('main-map-house12').style.visibility = "visible";
    document.getElementById('main-map-cabanon').style.visibility = "visible";
    document.getElementById('main-map-forest').style.visibility = "visible";
    document.getElementById('main-map-show-candidates-button').style.visibility = "visible";
    document.getElementById('main-map-solve-button').style.visibility = "visible";
}

function handleClickOnShowCandidates(){
    document.getElementById('candidates-overlay').style.visibility = "visible";
    document.getElementById('status-panel').style.visibility = "hidden";
    document.getElementById('main-map-house1').style.visibility = "hidden";
    document.getElementById('main-map-house2').style.visibility = "hidden";
    document.getElementById('main-map-house3').style.visibility = "hidden";
    document.getElementById('main-map-house4').style.visibility = "hidden";
    document.getElementById('main-map-house5').style.visibility = "hidden";
    document.getElementById('main-map-house6').style.visibility = "hidden";
    document.getElementById('main-map-house7').style.visibility = "hidden";
    document.getElementById('main-map-house8').style.visibility = "hidden";
    document.getElementById('main-map-house9').style.visibility = "hidden";
    document.getElementById('main-map-house10').style.visibility = "hidden";
    document.getElementById('main-map-house11').style.visibility = "hidden";
    document.getElementById('main-map-house12').style.visibility = "hidden";
    document.getElementById('main-map-cabanon').style.visibility = "hidden";
    document.getElementById('main-map-forest').style.visibility = "hidden";
    document.getElementById('main-map-show-candidates-button').style.visibility = "hidden";
    document.getElementById('main-map-solve-button').style.visibility = "hidden";

    document.getElementById('overlay-back-button-candidates').onclick = function(){handleClickOnBackToMap();};

    for(let i in personSelectionArray){
        let id = `candidate-${Number(i) + 1}`;
        if(personSelectionArray[i] === true){
            document.getElementById(id).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
        }
        document.getElementById(id).onclick = function(){togglePersonSelection(i);};
    }
    alert("Wähle Personen an, um sie als unschuldig zu markieren.");
}

function handleClickOnSolve(){
    document.getElementById('solve-overlay').style.visibility = "visible";
    document.getElementById('status-panel').style.visibility = "hidden";
    document.getElementById('main-map-house1').style.visibility = "hidden";
    document.getElementById('main-map-house2').style.visibility = "hidden";
    document.getElementById('main-map-house3').style.visibility = "hidden";
    document.getElementById('main-map-house4').style.visibility = "hidden";
    document.getElementById('main-map-house5').style.visibility = "hidden";
    document.getElementById('main-map-house6').style.visibility = "hidden";
    document.getElementById('main-map-house7').style.visibility = "hidden";
    document.getElementById('main-map-house8').style.visibility = "hidden";
    document.getElementById('main-map-house9').style.visibility = "hidden";
    document.getElementById('main-map-house10').style.visibility = "hidden";
    document.getElementById('main-map-house11').style.visibility = "hidden";
    document.getElementById('main-map-house12').style.visibility = "hidden";
    document.getElementById('main-map-cabanon').style.visibility = "hidden";
    document.getElementById('main-map-forest').style.visibility = "hidden";
    document.getElementById('main-map-show-candidates-button').style.visibility = "hidden";
    document.getElementById('main-map-solve-button').style.visibility = "hidden";

    document.getElementById('overlay-back-button-murderer').onclick = function(){handleClickOnBackToMap();};

    for(let i in personSelectionArray){
        let id = `murderer-${Number(i) + 1}`;
        if(personSelectionArray[i] === true){
            document.getElementById(id).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
            document.getElementById(id).onclick = function(){alert('Du kannst diese Person nicht zum Täter erklären, da du sie als unschuldig markiert hast!');};
        }else{
            document.getElementById(id).onclick = function(){guiltPerson(i);};
        }
    }
    alert("Wähle die Person aus, die die Tat begangen hat, um sie ins Gefängnis zu stecken!");
}

function handleEvent(eventName){
    switch(eventName){
        case 'quiz1':
            setGamePanelContent('easteregg');
            break;
        case 'quiz2':
            setGamePanelContent('easteregg');
            break;
        case 'quiz3':
            setGamePanelContent('easteregg');
            break;
        case 'quiz4':
            setGamePanelContent('easteregg');
            break;
        case 'quiz5':
            setGamePanelContent('easteregg');
            break;
        case 'quiz6':
            setGamePanelContent('easteregg');
            break;
        case 'quiz7':
            setGamePanelContent('easteregg');  
            break;
        case 'quiz8':
            setGamePanelContent('easteregg');
            break;
        case 'catch1':
            setGamePanelContent('easteregg');
            break;
        case 'catch2':
            setGamePanelContent('easteregg');  
            break; 
        case 'hat1':
            setGamePanelContent('easteregg');
            break;
        case 'hat2':
            setGamePanelContent('easteregg');     
            break;  
        case 'shoot1':
            setGamePanelContent('easteregg');
            break;
        case 'shoot2':
            setGamePanelContent('easteregg');
            break;
        case 'joker1':
            setGamePanelContent('joker');
            break;
        case 'joker2':
            setGamePanelContent('joker');        
            break;
        case 'cabanon':
            setGamePanelContent('easteregg');   
            break;    
        case 'forest':
            setGamePanelContent('easteregg');    
            break;
    }
}

// Diese Funktion ordnet den Gebäuden zugehörige Events zu (jede Runde anders!) 
function initializeHouseEventMapping(){
    let houseNameList = ['house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8', 'house9', 'house10', 'house11', 'house12'];
    let eventList = ['catch', 'catch', 'shoot', 'shoot', 'hat', 'hat', 'quiz', 'quiz', 'quiz', 'quiz', 'joker', 'joker'];   // joker -> man bekommt den Hinweis direkt
    let quizList = [1,2,3,4,5,6,7,8];
    let catchList = [1,2];
    let hutList = [1,2];
    let shootList = [1,2];
    let jokerList = [1,2];

    for(let house in houseNameList){
        console.log(house);
        let randIndex = Math.floor(Math.random() * eventList.length);
        if(eventList[randIndex] === 'quiz'){
            let randQuizIndex = Math.floor(Math.random() * quizList.length);
            houseEventMapping[houseNameList[house]] = `quiz${quizList[randQuizIndex]}`;
            quizList.splice(randQuizIndex, 1);
        }
        else if(eventList[randIndex] === 'catch'){
            let randCatchIndex = Math.floor(Math.random() * catchList.length);
            houseEventMapping[houseNameList[house]] = `catch${catchList[randCatchIndex]}`;
            catchList.splice(randCatchIndex, 1);
        }
        else if(eventList[randIndex] === 'hat'){
            let randHatIndex = Math.floor(Math.random() * hutList.length);
            houseEventMapping[houseNameList[house]] = `hat${hutList[randHatIndex]}`;
            hutList.splice(randHatIndex, 1);
        }
        else if(eventList[randIndex] === 'shoot'){
            let randShootIndex = Math.floor(Math.random() * shootList.length);
            houseEventMapping[houseNameList[house]] = `shoot${shootList[randShootIndex]}`;
            shootList.splice(randShootIndex, 1);
        }
        else if(eventList[randIndex] === 'joker'){
            let randJokerIndex = Math.floor(Math.random() * jokerList.length);
            houseEventMapping[houseNameList[house]] = `joker${jokerList[randJokerIndex]}`;
            jokerList.splice(randJokerIndex, 1);
        }
        else{
            houseEventMapping[houseNameList[house]] = eventList[randIndex];
        }
        eventList.splice(randIndex, 1);
    }

    console.log(houseEventMapping);
}

function initializePersonHouseMapping(){
    let houseNameList = ['house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8', 'house9', 'house10', 'house11', 'house12'];
    let personNumberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    for(let house in houseNameList){
        let randIndex = Math.floor(Math.random() * personNumberList.length);
        housePersonMapping[houseNameList[house]] = personNumberList[randIndex];
        personNumberList.splice(randIndex, 1);
    }
}

function togglePersonSelection(personNumber){
    if(personSelectionArray[personNumber] === true){
        personSelectionArray[personNumber] = false;
        document.getElementById(`candidate-${Number(personNumber) + 1}`).innerHTML = "";
        document.getElementById(`murderer-${Number(personNumber) + 1}`).innerHTML = "";
        document.getElementById(`murderer-${Number(personNumber) + 1}`).onclick = function(){guiltPerson(personNumber);};
    }else{
        personSelectionArray[personNumber] = true;
        if(personSelectionArray.every((e) => e === true)){
            alert('Du kannst nicht alle Personen als unschuldig markieren! Eine Person ist schuldig!');
            personSelectionArray[personNumber] = false;
        }else{
            document.getElementById(`candidate-${Number(personNumber) + 1}`).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
            document.getElementById(`murderer-${Number(personNumber) + 1}`).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
            document.getElementById(`murderer-${Number(personNumber) + 1}`).onclick = function(){alert('Du hast diese Person als unschuldig markiert, du kannst sie nicht als Täter markieren!');};
        }
    }
    console.log(personSelectionArray);
}

function guiltPerson(personNumber){
    if(personNumber == murderer){
        setGamePanelContent("win");
    }else{
        setGamePanelContent("fail");
    }
}

function getIntroText(event){
    switch(event){
        case 'quiz1':
            return intro_rätsel_1;
        case 'quiz2':
            return intro_rätsel_2;
        case 'quiz3':
            return intro_rätsel_3;
        case 'quiz4':
            return intro_rätsel_4;
        case 'quiz5':
            return intro_rätsel_5;
        case 'quiz6':
            return intro_rätsel_6;
        case 'quiz7':
            return intro_rätsel_7;
        case 'quiz8':
            return intro_rätsel_8;
        case 'catch1':
            return intro_pig;
        case 'catch2':
            return intro_bird;    
        case 'hat1':
            return intro_hut_1;
        case 'hat2':
            return intro_hut_2;
        case 'shoot1':
            return intro_shoot_1;
        case 'shoot2':
            return intro_shoot_2;
        case 'joker1':
            return joker_1;
        case 'joker2':
            return joker_2;                        
    }
}

function getSuccessText(event){
    switch(event){
        case 'quiz1':
            return rätsel_1_Antwort;
        case 'quiz2':
            return rätsel_2_Antwort;
        case 'quiz3':
            return rätsel_3_Antwort;
        case 'quiz4':
            return rätsel_4_Antwort;
        case 'quiz5':
            return rätsel_5_Antwort;
        case 'quiz6':
            return rätsel_6_Antwort;
        case 'quiz7':
            return rätsel_7_Antwort;
        case 'quiz8':
            return rätsel_8_Antwort;
        case 'catch1':
            return pig_catch;
        case 'catch2':
            return bird_win;    
        case 'hat1':
            return hut_1_win_3;
        case 'hat2':
            return hut_2_win_3
        case 'shoot1':
            return shoot_1_win;
        case 'shoot2':
            return shoot_2_win;
        case 'joker1':
            return '';
        case 'joker2':
            return '';                        
    }
}

function getFailText(event){
    switch(event){
        case 'quiz1':
            return rätsel_1_falsch;
        case 'quiz2':
            return rätsel_2_falsch;
        case 'quiz3':
            return rätsel_3_falsch;
        case 'quiz4':
            return rätsel_4_falsch;
        case 'quiz5':
            return rätsel_5_falsch;
        case 'quiz6':
            return rätsel_6_falsch;
        case 'quiz7':
            return rätsel_7_falsch;
        case 'quiz8':
            return rätsel_8_falsch;
        case 'catch1':
            return pig_fail;
        case 'catch2':
            return bird_fail;    
        case 'hat1':
            return hut_1_fail;
        case 'hat2':
            return hut_2_fail
        case 'shoot1':
            return shoot_1_fail;
        case 'shoot2':
            return shoot_2_fail;                        
    }
}