import imgURL  from '../data/miniCarouselImg.js';
import slide  from './slide.js';
class miniCarousel extends slide{
    constructor(){
        super("mini-img-list");
    }
    
    render(){
        let liTemplateLiteral = "";
        imgURL.forEach(img => {
            liTemplateLiteral +=`
<li>
    <img src="${img}"></img>
</li>`
 });
        return liTemplateLiteral;
    }
}

export default miniCarousel;
