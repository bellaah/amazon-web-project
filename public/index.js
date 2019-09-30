import card from './src/components/mainTopCard.js';
import miniCarousel from './src/components/miniCarousel.js';
import mainBottomCarousel from './src/components/mainBottomCarousel.js';

const _$ = (selector, base = document) => base.querySelector(selector);
const _$$ = (selector, base = document) => base.querySelectorAll(selector);

let mini = new miniCarousel("mini-list","mini-carousel","15");
let mainBottom = new mainBottomCarousel("main-list","main-carousel-bottom","60");
let mainCard =  new card("main-carousel-top","main-carousel-top-card-center");

const mainCarouselTop = _$(".main-carousel-top");

_$(".mini-list").innerHTML = mini.render();
mini.run();

mainCarouselTop.innerHTML = mainCard.render();  
_$(".main-carousel-top-card-center",mainCarouselTop).click();

(async function(){
    let obj = await fetch('/mainCarouselList')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
    _$(".main-list").innerHTML = await mainBottom.render(obj);
    await mainBottom.subscribe(mainCard);
    await mainCard.subscribe(mainBottom);

    _$(".main-carousel-top-button").click();

    const header = _$("header");
    fetch('/checkSession')
    .then((res) => {
        console.log(res.body.locked)
       if(res.body.locked){
            header.querySelector(".log-out-btn").style.display = "flex";
            header.querySelector(".sign-in-btn").style.display = "none";
       }else{
            header.querySelector(".log-out-btn").style.display = "none";
            header.querySelector(".sign-in-btn").style.display = "flex";
       }
    })
})()
