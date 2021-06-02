export default class ScreenController{
    constructor(currentScreenName){
        this.currentScreen = currentScreenName;
    }

    getScreenContent(){
        switch(this.currentScreen){
            case 'main':
                return this.getRawHtml("./screens/main/mainscreen.html");
        }
    }

    getRawHtml(href){
        let req = new XMLHttpRequest();
        req.open("GET", href, false);
        req.send();
        return req.responseText;
    }
}