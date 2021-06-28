export default class ScreenController{
    constructor(currentScreenName){
        this.currentScreen = currentScreenName;
    }

    getScreenContent(){
        switch(this.currentScreen){
            case 'intro':
                return this.getRawHtml("./screens/intro.html");
            case 'main':
                return this.getRawHtml("./screens/main/mainscreen.html");
            case 'location':
                return this.getRawHtml("./screens/location/location_screen.html"); 
            case 'game':
                return this.getRawHtml("./screens/game/game_screen.html");       
        }
    }

    getRawHtml(href){
        let req = new XMLHttpRequest();
        req.open("GET", href, false);
        req.send();
        return req.responseText;
    }
}