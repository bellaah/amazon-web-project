import data  from '../data/bottomData.js';
import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(parentName,carouselName,width){
        super(parentName,carouselName,width);
        document.querySelector(`.${parentName}`).innerHTML = this.render();    
    }
    render(){
        let childHTML = "";
        data.forEach((obj,idx) => {
            childHTML +=`
<li id="bottom-${idx}" style="background: url(${obj.image}); background-size: contain; background-position-x: -5rem;">
    <div class="main-text">
        <span class="main-text-title category-${obj.category}">${obj.title}</span><br/>
        <span class="main-text-header">${obj.head}</span>
        <div class="main-text-description">${obj.body}</div>
        <a class="main-text-link" href=${obj.link}>
            ${obj.tail} &#9656;
        </a>
    </div>
</li>`
    });
        return childHTML;
    }
}

export default mainCarousel;