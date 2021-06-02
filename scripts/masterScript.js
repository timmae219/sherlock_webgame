import ScreenController from "./screenController.js";

/*
    Hier kommt das ganze Game Handling rein
*/
var screenController = new ScreenController('main');

setGamePanelContent('main');


// Diese Funktion setzt den Content, der im Panel angezeigt werden soll
function setGamePanelContent(screenName){
    screenController.currentScreen = screenName;
    document.getElementById("gamepanel").innerHTML= screenController.getScreenContent();
}