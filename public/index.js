import card from './src/components/mainTopCard.js';
import miniCarousel from './src/components/miniCarousel.js';
import mainBottomCarousel from './src/components/mainBottomCarousel.js';

let mainTop = document.querySelector(".main-carousel-top");

let mini = new miniCarousel("mini-list","mini-carousel","15");
document.querySelector(".mini-list").innerHTML = mini.render();
mini.run();

let mainBottom = new mainBottomCarousel("main-list","main-carousel-bottom","60");
document.querySelector(".main-list").innerHTML = mainBottom.render();

let mainCard =  new card("main-carousel-top","main-carousel-top-card-center");
document.querySelector(".main-carousel-top").innerHTML = mainCard.render();  
document.querySelector(".main-carousel-top-card-center").click();

mainBottom.subscribe(mainCard);
mainCard.subscribe(mainBottom);

document.querySelector(".main-carousel-top-button").click();