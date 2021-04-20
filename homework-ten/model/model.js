    var homeContent = `
    <div class="hero-content">
    <div class="hero">
        <div class="content">
        <div class="title">TRAVEL-FLY</div>
            <div class="para">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
            </div>

     <button class="button">READ MORE</button> 
        </div>  
    </div>
</div>
    <section class="promo-tours">
        <div class="israel-promo , promo">
            <div class="title">ISRAEL</div>
            <div class="deal">FROM $1000</div>

            <button class="learn">LEARN MORE</button>
        </div>
        <div class="us-promo , promo">
            <div class="us-title">U.S.A</div>
            <div class="deal">FROM $1500</div>
            <button class="learn">LEARN MORE</button>
        </div>
        <div class="aus-promo , promo">
            <div class="aus-title">AUSTRAILIA</div>
            <div class="deal">FROM $1800</div>

            <button class="learn">LEARN MORE</button>
        </div>
    </section>

    <section class="booking-form">
        <div class="title">BOOKING FORM</div>
            <div class="person">
                <input class="name" type="text" placeholder="name...">
                <input class="email" type="text" placeholder="email...">
            </div>
            <div class="location">
                <input class="country" type="text" placeholder="country...">
                <input class="hotel" type="text" placeholder="hotel...">
            </div>

        <div class="dates">
            <label for="c-in" class="label-in">Check-in</label>
            <input class="Check-in" type="text" placeholder="5/10/2020"><br><br>
            <label for="c-out" class="label-out">Check-out</label>
            <input class="Check-out" type="text" placeholder="5/10/2020">
        </div>

        <div class="people">
            <span class="Left-Adult">
                <label for="Adult">Adult</label>
                <select class="Adult" name="Adult" id="Adults">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </span>

            <span class="center-child">
                <label for="Child">Children</label>
                <select class="Child" name="Child" id="Children">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </span>

            <span class="right-room">
                <label for="Room">Room</label>
                <select class="Room" name="Room" id="Rooms">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </span>
        </div>

        <div class="message ">
            <textarea name="Message" id="message" cols="60" rows="10" placeholder="message..."></textarea>
        </div>


        <button class="submit">SUBMIT</button>
    </section>`;



    var aboutContent = `
    <section class="about-content">
        <div class="header">
            <h1>ABOUT:</h1>
            <h3 class="border"></h3>
        </div>

        <div class="para">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </section>


    <section class="client-content">
        <div class="header-2">
            <h2>CLIENT QUOTES:</h2>
            <h3 class="border"></h3>
        </div>
        <div class="client-1">
            <div class="image-1"></div>
                <p class="client-1-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <p class="signature-1">- Miranda Brown</p>
        </div>

        <div class="client-2">
            <div class="image-2"></div>
            <p class="client-2-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <p class="signature-2">- Johnathan Wes</p>
        </div>
    </section>`;
    
    var toursContent = `
    <header>
        <span>TOURS:</span>>
    </header>



<div class="tours">
    <div class="tourpromo">
        <div class="BGimg-1">
            <p>ISRAEL</p>
                <p class="price">FROM $1000</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>



    <div class="tourpromo">
        <div class="BGimg-2">
            <p>U.S.A</p>
                <p class="price">FROM $1500</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">
        <div class="BGimg-3">
            <p>AUSTRAILIA</p>
                <p class="price">FROM $1800</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">

        <div class="BGimg-4">
            <p>NEW ZEALAND</p>
                <p class="price">FROM $1200</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">
        <div class="BGimg-5">
            <p>FRANCE</p>
                <p class="price">FROM $2500</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">
        <div class="BGimg-6">
            <p>EGYPT</p>
                <p class="price">FROM $900</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">

        <div class="BGimg-7">
            <p>JAPAN</p>
                <p class="price">FROM $1300</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


    <div class="tourpromo">
        <div class="BGimg-8">
            <p>CANADA</p>
                <p class="price">FROM $2000</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>



    <div class="tourpromo">
        <div class="BGimg-9">
            <p>U.A.E</p>
                <p class="price">FROM $3000</p>
                <span class="promoBtn">Learn More</span>
        </div>
    </div>


</div>`

     var specialContent = ` <h1>SPECIAL OFFER(S):</h1>
     <h5 class="border"></h5>


         <div class="offer-1">
             <div class="spain-image"></div>
                     <div class="title">BARCELONA, SPAIN
                 <div class="discount">(20% OFF!)</div>
                 </div>
             <div class="offer-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
             <span class="promoBtn">Learn More</span>
         </div>


         <div class="offer-2">
             <div class="thailand-image"></div>
             <div class="title">BANGKOK, THAILAND
                 <div class="discount">(10% OFF!)</div> 
             </div>
             <div class="offer-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
             <span class="promoBtn">Learn More</span>
         </div>` ;


     var blogContent = `
     <h1>BLOG:</h1>
     <h5 class="border"></h5>

     <section class="blog-1">
         <div class="june-date"></div><div class="blog-image"></div>
         <div class="text-1">Sed et persipiatis unde omnis iste natus</div>
         <div class="text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
     </section>


     <section class="blog-2">
         <div class="july-date"></div><div class="blog-image"></div>
         <div class="text-1">Sed et persipiatis unde omnis iste natus</div>
         <div class="text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
     </section>`;


     var contactContent = `<h1>CONTACT US:</h1>
        <h5 class="border"></h5>

        <section class="map-text">
            <div class="map"></div>
    
            <p>travel-fly Inc. <br>
                8901 Marmora Road,<br>
                Glasgow, D04 89GR.<br>
                Freephone:+1 800 559 6580<br>
                Telephone:+1 800 603 6035<br>
                FAX:+1 800 889 9898<br>
                E-mail: mail@travelfly.org    
             </p>
        </section>
     
            <section class="text-boxes">
                <input class="name" type="text" placeholder="Your name...">
                <input class="email" type="text" placeholder="Email Address...">
                <input class="company" type="text" placeholder="Company...">
                <input class="message" type="text" placeholder="Message...">
                <button>SEND MESSAGE</button>
            </section>`;
    
export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}

export function getPageStuff(pageId){
    $("#app2").html(eval(pageId));
}



  