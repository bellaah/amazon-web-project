import imgURL  from '../data/miniCarouselImg.js';
class miniCarousel{
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
