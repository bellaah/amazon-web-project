class slide{
    constructor(parentName,carouselName,width){
        this.carousel = document.querySelector(`.${carouselName}`);
        this.parent = document.querySelector(`.${parentName}`);
        this.leftBtn = `${carouselName}-left-btn`;
        this.rightBtn = `${carouselName}-right-btn`;
        this.lastTime = new Date().valueOf();
        this.width = width;
        this.slideTime = 200;
        this.currentNumber = 1;

        this.addEventListener();
    }
    
    addEventListener(){
        this.carousel.addEventListener("click",(evt)=>{
            if(evt.target.className === this.leftBtn) {
                this.slideRight(1);
                this.changeState(this.currentNumber);
            }else if(evt.target.className === this.rightBtn){
                this.slideLeft(1);
                this.changeState(this.currentNumber);
            }
            this.lastTime = new Date().valueOf();
        });
    }

    run(){
        let now = new Date().valueOf();
        if(now - this.lastTime >= 3000){
            this.slideLeft(1);
            this.lastTime = new Date().valueOf();
        }
        setTimeout(()=>{
            this.run();
        },500);
    }

    slideRight(slideCount,slideTime = this.slideTime){  
        this.currentNumber = (this.currentNumber+16)%17;

        let moveChildText = this.parent.lastElementChild.outerHTML;
        this.parent.removeChild(this.parent.lastElementChild);
        this.translate(`translate(+${this.width}rem,0)`,`${this.slideTime}ms`,`-${this.width}rem`);

        setTimeout(async()=>{
            this.parent.insertAdjacentHTML("afterbegin", moveChildText);
            this.translate("none","0s");
            if(slideCount > 1){
                setTimeout(()=>{
                    this.slideRight(slideCount-1,slideTime);
                },slideTime);
            }
        },slideTime);       
    }

    slideLeft(slideCount,slideTime = this.slideTime){ 
        this.currentNumber = (this.currentNumber+1)%17;

        let moveChildText = this.parent.firstElementChild.outerHTML;
        this.parent.removeChild(this.parent.firstElementChild);
        this.translate("none","0s","0");

        setTimeout(async()=>{
            this.parent.insertAdjacentHTML("beforeend", moveChildText);
            this.translate(`translate(-${this.width}rem,0)`,`${this.slideTime}ms`);
            if(slideCount > 1){
                setTimeout(()=>{
                    this.slideLeft(slideCount-1,slideTime);
                },slideTime);
            }
        },slideTime); 
    }

    translate(transform,time,left){
        this.parent.style.transform = transform;
        this.parent.style.transition = time;
         if(left !== undefined){
            this.parent.style.left = left;
        }
    }
}

export default slide;