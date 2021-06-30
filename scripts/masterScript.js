import ScreenController from "./screenController.js";

import {introText1, introText2, introText3, introText4} from "./strings.js";



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

// Zuordnung von Events/Rätseln/Spielen zu den Häusern (Wald und Cabanon sind fixe Events!)
var houseEventMapping = {};

var housePersonMapping = {};

var personTextMapping = {};

/*
    Spiel-Kontrollfluss
*/
//handleIntroScreen();
gotoMainScreen();
initializeHouseEventMapping();
initializePersonHouseMapping();

console.log(`INITIALIZED HOUSE PERSON MAPPING: ${housePersonMapping.toString()}`);
console.log(Object.keys(housePersonMapping));


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

// Bei Wald Zeit stoppen!
function handleClickOnLocation(locationName){
    setGamePanelContent("location");
    document.getElementById('gamepanel').style.backgroundColor = "transparent";
    document.getElementById('status-panel').style.visibility = "hidden";
    if(locationName.includes('house')){
        let effect = new Audio('../assets/audio/opening_door_sound_effect.mp3');
        effect.play();
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
    }
    if(locationName === 'cabanon'){
        // TODO: Knarzende Bretter-Soundeffekt
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/cabanon_background.png')";
    }
    if(locationName === 'forest'){
        // TODO: Blätterrascheln-Soundeffekt
        document.getElementById('location-div').style.backgroundImage = "url('assets/img/forest_background.jpg')";
    }
}

function handleClickOnShowCandidates(){
    alert(`Du hast auf "Verdächtige anzeigen" geklickt!`);
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
        let randIndex = Math.floor(Math.random() * eventList.length);
        if(eventList[randIndex] === 'quiz'){
            let randQuizIndex = Math.floor(Math.random() * quizList.length);
            houseEventMapping[house] = `quiz${quizList[randQuizIndex]}`;
            quizList.splice(randQuizIndex, 1);
        }
        else if(eventList[randIndex] === 'catch'){
            let randCatchIndex = Math.floor(Math.random() * catchList.length);
            houseEventMapping[house] = `catch${catchList[randCatchIndex]}`;
            catchList.splice(randCatchIndex, 1);
        }
        else if(eventList[randIndex] === 'hat'){
            let randHatIndex = Math.floor(Math.random() * hutList.length);
            houseEventMapping[house] = `hat${hutList[randHatIndex]}`;
            hutList.splice(randHatIndex, 1);
        }
        else if(eventList[randIndex] === 'shoot'){
            let randShootIndex = Math.floor(Math.random() * shootList.length);
            houseEventMapping[house] = `shoot${shootList[randShootIndex]}`;
            shootList.splice(randShootIndex, 1);
        }
        else if(eventList[randIndex] === 'joker'){
            let randJokerIndex = Math.floor(Math.random() * jokerList.length);
            houseEventMapping[house] = `joker${jokerList[randJokerIndex]}`;
            jokerList.splice(randJokerIndex, 1);
        }
        else{
            houseEventMapping[house] = eventList[randIndex];
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

function initializePersonTextMapping(){}