// import card from './src/components/card.js';
import miniCarousel from './src/components/miniCarousel.js';
import slide from './src/components/slide.js';

const miniImgList = $(".mini-img-list");

function $(name){
    return document.querySelector(name);
}

const makeInnerHTML = () => {
    let liTag = new miniCarousel();
    let imgList = liTag.render();
    miniImgList.innerHTML = imgList;
    setInterval(() => {
       slideLeft();
    },3000);
}

const autoSlide = () => {
    let moveChild = miniImgList.firstElementChild.outerHTML;
    miniImgList.removeChild(miniImgList.firstElementChild);
    
    miniImgList.style.left = "0";
    miniImgList.style.transform = "none";
    miniImgList.style.transition = "0s";
    setTimeout(()=>{
        miniImgList.style.transform = "translate(-15rem,0)";
        miniImgList.style.transition = "0.3s";
        miniImgList.insertAdjacentHTML("beforeend", moveChild);
    },300);
}

const slideLeft = () => {
    let moveChild = miniImgList.lastElementChild.outerHTML;
    miniImgList.removeChild(miniImgList.lastElementChild);

    miniImgList.style.transform = "translate(+15rem,0)";
    miniImgList.style.transition = "0.3s";

    setTimeout(()=>{
        miniImgList.style.transform = "none";
        miniImgList.style.transition = "0s";
        miniImgList.insertAdjacentHTML("afterbegin", moveChild);
    },300);
}

makeInnerHTML();




