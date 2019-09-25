import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(parentName,carouselName,width){
        super(parentName,carouselName,width);  

        this.observers = [];
        this.state = null; 

        this.data;
        this.publisher = [];
    }

    add(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => {
          observer.update();
        });
    }
    changeState(currentNumber) {
        this.state =  currentNumber;
        this.notifyObservers();
    }

    subscribe(publisher) {
        this.publisher = publisher;
        this.publisher.add(this);
    }
    update() {
        this.data = this.publisher.state;  
        this.slideLoop(parseInt(this.data));
    }

    slideLoop(id){
        if(this.currentNumber === id){
            return;
        }
        let flag = this.currentNumber < id ? true : false;
   
        let [slideFunction,slideCount] = this.findCloser(flag,id,this.currentNumber);
        let slideTime = 200/slideCount;
        slideFunction.bind(this)(slideCount,slideTime);
    }

    findCloser(flag,id,currentNum){
        let reverseSlideCount;
        if(flag){   
            reverseSlideCount = 17-id+currentNum; 
            return reverseSlideCount < id-currentNum ? [this.slideRight,reverseSlideCount] : [this.slideLeft,id-currentNum];
        }else{
            reverseSlideCount = 17-currentNum+id;
            return reverseSlideCount < currentNum-id ? [this.slideLeft,reverseSlideCount] : [this.slideRight,currentNum-id];
        }
    }


    render(list){
        let childHTML = "";
        let count=0;
        let category = ["ship","stream","shop","read","more"];
        for(let i=0; i<category.length; i++){
            list.forEach(obj => {
                if(obj.category === category[i]){
                    childHTML += `
<li id="bottom-${count++}" class="${obj.title}-li" style="background: url(${obj.image}); background-size: contain; background-position-x: -5rem;">
    <div class="main-text">
        <span class="main-text-title category-${obj.category}">${obj.keyword}</span><br/>
        <span class="main-text-header">${obj.title}</span>
        <div class="main-text-description">${obj.description}</div>
        <a class="main-text-link" href=${obj.link}>
            ${obj.tail} &#9656;
        </a>
    </div>
</li>`
                }
        });
    }
        return childHTML;
    }
}

export default mainCarousel;