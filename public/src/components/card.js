import data  from '../data/cardData.js';
class card{
    constructor(){
        
    }
    render(){
        let childHTML = "";
        data.forEach(obj => {
            childHTML +=`
<div class="main-carousel-top-card-back" style="background-image: linear-gradient(30deg, ${obj.gradient[0]} 40%, ${obj.gradient[1]} 85%, ${obj.gradient[2]} 74px);">
    <div class="main-carousel-top-card" style="background-image: url(${obj.image}), 
    linear-gradient(30deg,${obj.gradient[0]} 40%,${obj.gradient[1]} 90%, ${obj.gradient[2]} 48px);">
        <div class="main-carousel-top-card-title">${obj.title}</div>
    </div>
</div>
            `
 });
        return childHTML;
    }
}

export default card;