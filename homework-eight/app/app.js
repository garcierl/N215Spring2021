var homeContent = `<div class="home">
<h1>HOME</h1>
<p>
    Welcome to Divsion Dining!
</p>


<p> We serve a variety of dishes, all freshly cooked and prepared just for you.</p>
</div>

<div class="images">
    <div class= "home1"></div>
    <div class="home2"></div>
    <div class="home3"></div>
</div>
`;

var aboutContent = `<div class="about">
<h1>ABOUT</h1>
<p>Divison Dining is a family owned resturant dedicated to providing the best food to our customers. </p>
</div>

<div class="images">
    <div class= "about1"></div>
    <div class="about2"></div>
    <div class="about3"></div>
</div>

<div class="abouttext">
    <p>Opened in 2015, Divsion Dining works with local food sources to cater to customers while using the best possible ingredients. </p>
</div> `;

var productsContent = `  <div class="products">
<h1>PRODUCTS</h1>
<p>Divsion Dining offers a wide variety of dishes and desserts, ranging from burgers to pizza to fish, and ice cream to cakes. </p>
</div>

<div class="images">
    <div class= "product1"></div>
    <div class="product2"></div>
    <div class="product3"></div>
</div>`;

var contactContent = ` <div class="contact">
<h1>CONTACT</h1>
<p>You can contact Divsion Dining the following ways: </p>

<div class= "images">
    <div class="contact2"></div>
</div>

<ul class="info">
    <li>Email: divisiondining@outlook.com</li>
    <li>Phone: 123-465-7654</li>
    <li>Facebook: Division Dining</li>
    <li>Instagram: Division-Dining</li>
    <li>Twitter: @Division-Dining</li>
</ul>
</div>

<div class="images">
<div class="contact1"></div>
<div class="contact3"></div>
</div>`;

function init(){

$("nav a").click(function(event){
    
    let btnId = this.id;
    let contentID = btnId + "Content"

    $("#app").html(eval(contentID));
    
    
})

}


$(document).ready(function(){
    init();
})