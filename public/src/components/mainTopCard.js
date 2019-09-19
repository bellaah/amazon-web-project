import data  from '../data/cardData.js';
class card{
    constructor(parentName,listClassName){
        this.parent = document.querySelector(parentName);
        this.listClassName = listClassName;
        this.addEventListener();
    }

    addEventListener(){
        this.parent.addEventListener("click",(evt)=>{
            if(evt.target.className === "main-carousel-top-card-center") {
                this.reduceCardAll();
                this.expandCard(evt.target);
            }
        });
    }

    expandCard(target){
        target.parentElement.firstElementChild.style.display = "flex";
        target.style.transform = "scale(1.1)";
        target.style.zIndex = "10";
    }

    reduceCardAll(){
        let list = document.querySelectorAll(this.listClassName);
        list.forEach(item => {
            item.parentElement.firstElementChild.style.display = "none";
            item.style.transform = "scale(1)";
            item.style.zIndex = "0";
        })
    }

    render(){
        let childHTML = "";
        data.forEach(obj => {
            childHTML +=`
<div class="main-carousel-top-card">
    <div class="main-carousel-top-card-back" style="background-image: linear-gradient(30deg, ${obj.gradient[0]} 40%, ${obj.gradient[1]} 85%, ${obj.gradient[2]} 74px);">
            <div class="main-carousel-top-button-list">
                ${this.makeContentButton(obj.content)}
            </div>
    </div>
    <div class="main-carousel-top-card-title">${obj.title}</div>
    <div class="main-carousel-top-card-center" style="background-image: url(${obj.image}), 
    linear-gradient(30deg,${obj.gradient[0]} 40%,${obj.gradient[1]} 90%, ${obj.gradient[2]} 48px);"></div>
</div>`
    });
        return childHTML;
    }

    makeContentButton(ButtonCount){
        let contentButtonList = "";
        for(let i=0; i<ButtonCount; i++){
            contentButtonList += `
            <button class="main-carousel-top-button" style="background-repeat-x:no-repeat;"></button>
            `
        }
        return contentButtonList;
    }

}

export default card;