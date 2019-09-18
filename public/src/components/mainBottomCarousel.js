import data  from '../data/bottomData.js';
import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(){
        super("main-list","main-carousel-bottom");
    }
/**
 * 
 <li>
    <div class="main-text">
        <span class="main-text-header">Fast, FREE delivery on over 100 million items</span>
        <div class="main-text-description">Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.</div>
        <a class="main-text-link" href="https://www.amazon.com/b?node=15247183011">
            Explore Prime Delivery >
        </a>
    </div>
</li>
 */
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