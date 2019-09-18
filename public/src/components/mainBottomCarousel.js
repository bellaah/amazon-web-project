import imgURL  from '../data/bottomData.js';
import slide  from './slide.js';
class bottomCarousel extends slide{
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

export default bottomCarousel;