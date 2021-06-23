import ScreenController from "./screenController.js";

/*
    Hier kommt das ganze Game Handling rein
*/
var screenController = new ScreenController('main');

gotoMainScreen();


// Diese Funktion setzt den Content, der im Panel angezeigt werden soll
function setGamePanelContent(screenName){
    screenController.currentScreen = screenName;
    document.getElementById("gamepanel").innerHTML= screenController.getScreenContent();
    if(screenName === 'main'){
        document.getElementById('main-map-house1').onclick = function(){handleClickOnLocation('house1');};
        document.getElementById('main-map-house2').onclick = function(){handleClickOnLocation('house2');};
        document.getElementById('main-map-house3').onclick = function(){handleClickOnLocation('house3');};
        document.getElementById('main-map-house4').onclick = function(){handleClickOnLocation('house4');};
        // set handlers for places
        document.getElementById('main-map-show-candidates-button').onclick = handleClickOnShowCandidates;
        document.getElementById('main-map-solve-button').onclick = handleClickOnSolve;
    }
}

function gotoMainScreen(){
    setGamePanelContent('main');
    var audio = new Audio('../assets/audio/background_1.mp3');
    audio.loop = true;
    audio.play();
}

function handleClickOnLocation(locationName){
    let effect = new Audio('../assets/audio/opening_door_sound_effect.mp3');
    effect.play();
}

function handleClickOnShowCandidates(){
    alert(`Du hast auf "Verdächtige anzeigen" geklickt!`);
}

function handleClickOnSolve(){
    alert(`Du hast auf "Fall lösen" geklickt!`);
}