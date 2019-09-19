class slide{
    constructor(parentName,carouselName,width){
        this.carousel = document.querySelector(`.${carouselName}`);
        this.parent = document.querySelector(`.${parentName}`);
        this.leftBtn = `${carouselName}-left-btn`;
        this.rightBtn = `${carouselName}-right-btn`;
        this.lastTime = new Date().valueOf();
        this.width = width;

        this.addEventListener();
    }
    
    addEventListener(){
        this.carousel.addEventListener("click",(evt)=>{
            if(evt.target.className === this.leftBtn) {
                this.slideRight();
            }else if(evt.target.className === this.rightBtn){
                this.slideLeft();
            }
            this.lastTime = new Date().valueOf();
        });
    }

    run(){
        let now = new Date().valueOf();
        if(now - this.lastTime >= 3000){
            this.slideLeft();
            this.lastTime = new Date().valueOf();
        }
        setTimeout(()=>{
            this.run();
        },500);
    }

    slideRight(){  
        let moveChildText = this.parent.lastElementChild.outerHTML;
        this.parent.removeChild(this.parent.lastElementChild);
        this.translate(`translate(+${this.width}rem,0)`,"0.3s",`-${this.width}rem`);

        setTimeout(async()=>{
            this.parent.insertAdjacentHTML("afterbegin", moveChildText);
            this.translate("none","0s");
        },300);     
    }

    slideLeft(){ 
        let moveChildText = this.parent.firstElementChild.outerHTML;
        this.parent.removeChild(this.parent.firstElementChild);
        this.translate("none","0s","0");

        setTimeout(async()=>{
            this.parent.insertAdjacentHTML("beforeend", moveChildText);
            this.translate(`translate(-${this.width}rem,0)`,"0.3s");
        },300);    
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