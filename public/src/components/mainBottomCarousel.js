import data  from '../data/bottomData.js';
import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(){
        super("main-list","main-carousel-bottom","60rem");
    }
    render(){
        let childHTML = "";
        data.forEach(obj => {
            childHTML +=`
<li style="background: url(${obj.image}); background-position-x: -10rem;">
    <div class="main-text">
        <span class="main-text-title ">${obj.title}</span>
        <span class="main-text-header">${obj.head}</span>
        <div class="main-text-description">${obj.body}</div>
        <a class="main-text-link" href=${obj.link}>
            ${obj.tail} >
        </a>
    </div>
</li>`
 });
        return childHTML;
    }
}

export default mainCarousel;