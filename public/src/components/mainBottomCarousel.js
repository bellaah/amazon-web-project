import data  from '../data/bottomData.js';
import slide  from './slide.js';
class mainCarousel extends slide{
    constructor(parentName,carouselName,width){
        super(parentName,carouselName,width);  

        //publisher
        this.observers = [];
        this.state = null; 

        //observer
        this.data;
        this.publisher=[];
    }

    //발행 메소드
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

    //구독 메소드
    subscribe(publisher) {
        this.publisher = publisher;
        this.publisher.add(this);
    }
    update() {
        this.data = this.publisher.state;   //클릭이벤트가 발생한 번호 
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
        if(flag){       //current < id
            reverseSlideCount = 17-id+currentNum;
            return reverseSlideCount < id-currentNum? [this.slideRight,reverseSlideCount] :[this.slideLeft,id-currentNum];
        }else{
            reverseSlideCount = 17-currentNum+id;
            return reverseSlideCount < currentNum-id ? [this.slideLeft,reverseSlideCount] :[this.slideRight,currentNum-id];
        }
    }


    render(){
        let childHTML = "";
        data.forEach((obj,idx) => {
            childHTML +=`
<li id="bottom-${idx}" class="${obj.title}-li" style="background: url(${obj.image}); background-size: contain; background-position-x: -5rem;">
    <div class="main-text">
        <span class="main-text-title category-${obj.category}">${obj.title}</span><br/>
        <span class="main-text-header">${obj.head}</span>
        <div class="main-text-description">${obj.body}</div>
        <a class="main-text-link" href=${obj.link}>
            ${obj.tail} &#9656;
        </a>
    </div>
</li>`
    });
        return childHTML;
    }
}

export default mainCarousel;