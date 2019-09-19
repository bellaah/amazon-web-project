import card from './src/components/mainTopCard.js';
import miniCarousel from './src/components/miniCarousel.js';
import mainBottomCarousel from './src/components/mainBottomCarousel.js';

let mainTop = document.querySelector(".main-carousel-top");

let mini = new miniCarousel("mini-list","mini-carousel","15");
mini.run();

let mainBottom = new mainBottomCarousel("main-list","main-carousel-bottom","60");

let mainCard =  new card(".main-carousel-top",".main-carousel-top-card-center");