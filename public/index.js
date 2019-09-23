import card from './src/components/mainTopCard.js';
import miniCarousel from './src/components/miniCarousel.js';
import mainBottomCarousel from './src/components/mainBottomCarousel.js';

const _$ = (selector, base = document) => base.querySelector(selector);
const _$$ = (selector, base = document) => base.querySelectorAll(selector);

let mini = new miniCarousel("mini-list","mini-carousel","15");
_$(".mini-list").innerHTML = mini.render();
mini.run();

let mainBottom = new mainBottomCarousel("main-list","main-carousel-bottom","60");
_$(".main-list").innerHTML = mainBottom.render();

let mainCard =  new card("main-carousel-top","main-carousel-top-card-center");
const mainCarouselTop = _$(".main-carousel-top");
mainCarouselTop.innerHTML = mainCard.render();  
_$(".main-carousel-top-card-center",mainCarouselTop).click();

mainBottom.subscribe(mainCard);
mainCard.subscribe(mainBottom);

_$(".main-carousel-top-button").click();