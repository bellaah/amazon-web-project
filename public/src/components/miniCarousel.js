import imgURL  from '../data/miniData.js';
import slide  from './slide.js';
class miniCarousel extends slide{
    constructor(){
        super("mini-list","mini-carousel","15");
    }

    render(){
        let childHTML = "";
        imgURL.forEach(img => {
            childHTML +=`
<li>
    <img src="${img}"></img>
</li>`
 });
        return childHTML;
    }
}

export default miniCarousel;
