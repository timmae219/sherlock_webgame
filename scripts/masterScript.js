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
var screenController = new ScreenController('intro');

// Zuordnung von Events/Rätseln/Spielen zu den Häusern (Wald und Cabanon sind fixe Events!)
var houseEventMapping = {};

/*
    Spiel-Kontrollfluss
*/
handleIntroScreen();
initializeHouseEventMapping();

console.log(houseEventMapping);


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
    if(locationName.includes('house')){
        let effect = new Audio('../assets/audio/opening_door_sound_effect.mp3');
        effect.play();
    }
    if(locationName === 'cabanon'){
        // TODO: Knarzende Bretter-Soundeffekt
        // TODO: morsche Holzwand-Hintergrund
    }
    if(locationName === 'forest'){
        // TODO: Blätterrascheln-Soundeffekt
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

    for(let house in houseNameList){
        let randIndex = Math.floor(Math.random() * eventList.length);
        houseEventMapping[house] = eventList[randIndex];
        eventList.splice(randIndex, 1);
    }
}