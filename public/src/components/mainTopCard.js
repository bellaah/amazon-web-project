import data  from '../data/cardData.js';
class card{
    constructor(parentName,listClassName){
        this.parent = document.querySelector(`.${parentName}`);
        this.listClassName = `.${listClassName}`;

        this.observers = [];
        this.state = null; 

        this.data;
        this.publisher;

        this.addEventListener();
    }

    add(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => {
          observer.update();
        });
    }
    changeState(clickNumber) {
        this.state = clickNumber;
        this.notifyObservers();
    }

    subscribe(publisher) {
        this.publisher = publisher;
        this.publisher.add(this);
    }
    update() {
        this.data = this.publisher.state; 
        let selector = document.querySelector(`#top-${this.data}`);
        let parent = selector.parentNode.parentNode;
        if(parent.style.display == "none"){
            this.reduceCardAll();
            this.expandCard(parent.parentNode.querySelector(".main-carousel-top-card-center"));
        }   
        selector.click();
    }

    addEventListener(){
        this.parent.addEventListener("click",(evt)=>{
            if(evt.target.className === "main-carousel-top-card-center") {
                this.reduceCardAll();
                this.expandCard(evt.target);
                let firstBtn = evt.target.parentElement.querySelector(".main-carousel-top-button");
                firstBtn.click();
            }else if(evt.target.className === "main-carousel-top-button"){
                this.resetOpacityAll(evt.target.className);
                this.changeOpacity(evt.target);
                this.currentNumber = event.target.id.split('-')[1];
                this.changeState(event.target.id.split('-')[1]); 
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

    changeOpacity(target){
        target.style.opacity = "1";
    }

    resetOpacityAll(className){
        let list = document.querySelectorAll(`.${className}`);
        list.forEach(item => {
            item.style.opacity = "0.5";
        })
    } 

    render(){
        let childHTML = "";
        let startCount = 0;
        data.forEach(obj => {
            childHTML += `
<div class="main-carousel-top-card">
    <div class="main-carousel-top-card-back" style="background-image: linear-gradient(30deg, ${obj.gradient[0]} 40%, ${obj.gradient[1]} 85%, ${obj.gradient[2]} 74px);">
            <div class="main-carousel-top-button-list">
                ${this.makeContentButton(obj.content,startCount)}
            </div>
    </div>
    <div class="main-carousel-top-card-title">${obj.title}</div>
    <div class="main-carousel-top-card-center" style="background-image: url(${obj.image}), 
    linear-gradient(30deg,${obj.gradient[0]} 40%,${obj.gradient[1]} 90%, ${obj.gradient[2]} 48px);"></div>
</div>`
    startCount += obj.content;
    });
        return childHTML;
    }

    makeContentButton(ButtonCount,startCount){
        let contentButtonList = "";
        for(let i=0; i<ButtonCount; i++){
            contentButtonList += `
            <button class="main-carousel-top-button" id="top-${startCount+i}" style="background-repeat-x:no-repeat;"></button>
            `
        }
        return contentButtonList;
    }
}

export default card;