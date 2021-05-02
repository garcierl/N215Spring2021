import * as MODEL from "../model/model.js";

function init() {
    //let logo = document.getElementById(logo);

    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        let heroID = btnID + "Stuff";
   


        switch (btnID) {
            case btnID = 'home':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`hero`);
                document.getElementById("classSwitch").style.width = "100%";
                $(`nav`).removeClass(`black_nav`).addClass(`white_nav`);
                logo.src="../images/logo/logo-white.png";  
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;

            case btnID = 'about':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`about`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png";                
               // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;

            case btnID = 'gallery':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;

             case btnID = 'gallery1':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery1`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;

            case btnID = 'gallery2':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery2`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break; 

            case btnID = 'gallery3':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery3`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;   

             case btnID = 'gallery4':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery4`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break; 

            case btnID = 'gallery5':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`gallery5`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;  

            case btnID = 'blog':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
               // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;

            case btnID = 'blog1':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog1`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break; 

             case btnID = 'blog2':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog2`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;   

            case btnID = 'blog3':
               removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog3`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
               break;   

            case btnID = 'blog4':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog4`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
               // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;  
             case btnID = 'blog5':
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`blog5`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                // MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID);
                break;                   
            case btnID = 'contact': 
                removeAllClass();
                $(`#classSwitch`).closest(`div#classSwitch`).addClass(`contact`);
                $(`nav`).removeClass(`white_nav`).addClass(`black_nav`);
                logo.src="../images/logo/logo-black.png"; 
                //MODEL.getPageStuff(heroID);
                MODEL.getPageContent(contentID, addPromoListeners);
                break;
            }
});
}

function addPromoListeners() {

    $(".gallery  a").click(function (e) { 
        let btnID = this.id;
        let contentID = btnID + "Content";
        MODEL.getPageContent(contentID);
        console.log (btnID);
    })

    $(".blog  a").click(function (e) { 
        let btnID = this.id;
        let contentID = btnID + "Content";
        MODEL.getPageContent(contentID);
        console.log (btnID);
    })
        
}


function removeAllClass() {
    $(`#classSwitch`).closest(`div#classSwitch`).removeClass(`hero`).removeClass(`gallery`).removeClass(`gallery1`).removeClass(`gallery2`).removeClass(`gallery3`).removeClass(`gallery4`).removeClass(`gallery5`).removeClass(`about`).removeClass(`blog`).removeClass(`blog1`).removeClass(`blog2`).removeClass(`blog3`).removeClass(`blog4`).removeClass(`blog5`).removeClass(`contact`);
}

$(document).ready(function () {
    init();
    MODEL.getPageContent('homeContent');
})