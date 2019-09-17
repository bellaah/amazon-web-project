// import card from './src/components/card.js';
import miniCarousel from './src/components/miniCarousel.js';
import slide from './src/components/slide.js';

const miniImgList = $(".mini-img-list");

function $(name){
    return document.querySelector(name);
}

const makeInnerHTML = () => {
    let liTag = new miniCarousel();
    let slideImg = new slide();
    let imgList = liTag.render();
    // setTimeout(()=>{
        
    // },1000);
    miniImgList.innerHTML = imgList;

}
makeInnerHTML();




