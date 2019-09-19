import imgURL  from '../data/miniData.js';
import slide  from './slide.js';
class miniCarousel extends slide{
    constructor(){
        super("mini-list","mini-carousel","15");
    }

    render(){
        let childHTML = "";
        imgURL.forEach(obj => {
            childHTML +=`
<li>
    <a href=${obj.link}>
        <img src="${obj.image}"></img>
    </a>
</li>`
 });
        return childHTML;
    }
}

export default miniCarousel;
