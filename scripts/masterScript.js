import ScreenController from "./screenController.js";

import  "./strings.js";
import { intro_bird, intro_hut_1, intro_hut_2, intro_pig, intro_rätsel_1, intro_rätsel_2, intro_rätsel_3, intro_rätsel_4, intro_rätsel_5, intro_rätsel_6, intro_rätsel_7, intro_rätsel_8, intro_shoot_1, intro_shoot_2, joker_1, joker_2 } from "./strings.js";



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
        older: false,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Oliver
        hairColor: "blonde",
        older: false,
        hat: true,
        glasses: false,
        accessoired: false
    },
    {   //Peter
        hairColor: "brown",
        older: false,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Klaus
        hairColor: "brown",
        older: true,
        hat: false,
        glasses: true,
        accessoired: false
    },
    {   //David
        hairColor: "blond",
        older: false,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Albert
        hairColor: "black",
        older: false,
        hat: false,
        glasses: false,
        accessoired: true
    },
    {   //Philip
        hairColor: "black",
        older: true,
        hat: true,
        glasses: false,
        accessoired: false
    },
    {   //Ingrid
        hairColor: "brown",
        older: true,
        hat: true,
        glasses: true,
        accessoired: true
    },
    {   //Hannes
        hairColor: "black",
        older: true,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Simone
        hairColor: "red",
        older: false,
        hat: false,
        glasses: true,
        accessoired: true
    },
    {   //Ute
        hairColor: "blond",
        older: false,
        hat: false,
        glasses: false,
        accessoired: true
    },
    {   //Michael
        hairColor: "white",
        older: true,
        hat: false,
        glasses: true,
        accessoired: false
    },
    {   //Tina
        hairColor: "blond",
        older: false,
        hat: false,
        glasses: false,
        accessoired: true
    },
    {   //Stefan
        hairColor: "white",
        older: true,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Elke
        hairColor: "black",
        older: true,
        hat: false,
        glasses: true,
        accessoired: true
    },
    {   //Katrin
        hairColor: "blond",
        older: false,
        hat: false,
        glasses: false,
        accessoired: true
    },
    {   //Doris
        hairColor: "red",
        older: false,
        hat: false,
        glasses: false,
        accessoired: true
    },
    {   //Andreas
        hairColor: "white",
        older: true,
        hat: false,
        glasses: true,
        accessoired: false
    },
    {   //Tobias
        hairColor: "black",
        older: false,
        hat: false,
        glasses: true,
        accessoired: false
    },
    {   //Manfred
        hairColor: "white",
        older: true,
        hat: false,
        glasses: true,
        accessoired: false
    },
    {   //Markus
        hairColor: "white",
        older: true,
        hat: false,
        glasses: false,
        accessoired: false
    },
    {   //Jörg
        hairColor: "brown",
        older: false,
        hat: true,
        glasses: false,
        accessoired: false
    },
    {   //Patrick
        hairColor: "brown",
        older: false,
        hat: true,
        glasses: false,
        accessoired: false
    },
    {   //Alfred
        hairColor: "red",
        older: true,
        hat: false,
        glasses: false,
        accessoired: false
    }    
];

// Zuordnung von Events/Rätseln/Spielen zu den Häusern (Wald und Cabanon sind fixe Events!)
var houseEventMapping = {};

var housePersonMapping = {};

// 24 bool-Werte, die signalisieren, ob eine Person als unschuldig markiert wurde, oder nicht
var personSelectionArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

/*
    Spiel-Kontrollfluss
*/
//handleIntroScreen();
gotoMainScreen();
initializeHouseEventMapping();
initializePersonHouseMapping();

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
        document.getElementById('status-panel').style.visibility = "visible";
        document.getElementById('status-panel').innerHTML = "Wähle einen Ort aus";
        document.getElementById('candidates-overlay').style.visibility = "hidden";
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
    setGamePanelContent("location");
    document.getElementById('gamepanel').style.backgroundColor = "transparent";
    document.getElementById('status-panel').style.visibility = "hidden";
    if(locationName.includes('house')){
        let effect = new Audio('../assets/audio/opening_door_sound_effect.mp3');
        effect.play();
        document.getElementById('speechbubble-div').style.visibility = 'visible';
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
        document.getElementById('speechbubble-div').innerHTML = `${getIntroText(houseEventMapping[locationName])}</br><button>OK</button>`;
    }
    if(locationName === 'cabanon'){
        // TODO: Knarzende Bretter-Soundeffekt
        document.getElementById('speechbubble-div').style.visibility = 'hidden';
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/cabanon_background.png')";
    }
    if(locationName === 'forest'){
        // TODO: Blätterrascheln-Soundeffekt
        document.getElementById('speechbubble-div').style.visibility = 'hidden';
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/forest_background.jpg')";
    }
}

function handleClickOnBackToMap(){
    document.getElementById('candidates-overlay').style.visibility = "hidden";
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

    for(let i in personSelectionArray){
        let id = `candidate-${Number(i) + 1}`;
        console.log(id);
        document.getElementById(id).onclick = function(){togglePersonSelection(i);};
    }
    alert("Wähle Personen an, um sie als unschuldig zu markieren.");
}

function handleClickOnSolve(){
    alert(`Du hast auf "Fall lösen" geklickt!`);
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
        //document.getElementById(`murderer-${Number(personNumber) + 1}`).innerHTML = "";
        //document.getElementById(`murderer-${Number(personNumber) + 1}`).onclick = function(){guiltPerson(personNumber);};
    }else{
        personSelectionArray[personNumber] = true;
        if(personSelectionArray.every((e) => e === true)){
            alert('Du kannst nicht alle Personen als unschuldig markieren! Eine Person ist schuldig!');
            personSelectionArray[personNumber] = false;
        }else{
            document.getElementById(`candidate-${Number(personNumber) + 1}`).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
            //document.getElementById(`murderer-${Number(personNumber) + 1}`).innerHTML = `<img src="/assets/img/kreuz.png" id="overlay-mark">`;
            //document.getElementById(`murderer-${Number(personNumber) + 1}`).onclick = function(){alert('Du hast diese Person als unschuldig markiert, du kannst sie nicht als Täter markieren!');};
        }
    }
    console.log(personSelectionArray);
}

function guiltPerson(personNumber){}

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