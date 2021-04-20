import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        let heroID = btnID + "Stuff";
    
   


        switch (btnID) {
            case btnID = 'home':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`hero`);
                document.getElementById("classSwitch").style.width = "100%";
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            case btnID = 'about':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`about`);
               // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            case btnID = 'tours':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`tours`);
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            case btnID = 'special':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`special`);
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            case btnID = 'blog':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog`);
               // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            case btnID = 'contact': 
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`contact`);
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;
            }
});
}

function removeAllClass() {
    $(`#classSwitch`).closest(`div#classSwitch`).removeClass(`hero`).removeClass(`tours`).removeClass(`about`).removeClass(`special`).removeClass(`blog`).removeClass(`contact`);
}

$(document).ready(function () {
    init();
    MODEL.getPageContent('homeContent');
})