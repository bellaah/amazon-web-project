import card from './src/components/card.js';
import miniCarousel from './src/components/miniCarousel.js';
import mainBottomCarousel from './src/components/mainBottomCarousel.js';

let mainTop = document.querySelector(".main-carousel-top");

let mini = new miniCarousel();
mini.makeInnerHTML();
mini.run();

let main = new mainBottomCarousel();
main.makeInnerHTML();

let mainCard =  new card();
mainTop.innerHTML = mainCard.render();