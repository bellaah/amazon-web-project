import imgURL  from '../data/miniData.js';
import slide  from './slide.js';
class miniCarousel extends slide{
    constructor(){
        super("mini-img-list","mini-carousel");
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
