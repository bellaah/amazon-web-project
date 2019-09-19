class slide{
    constructor(olName,carouselName,width){
        this.carousel = document.querySelector(`.${carouselName}`);
        this.ol = document.querySelector(`.${olName}`);
        this.leftBtn = `${carouselName}-left-btn`;
        this.rightBtn = `${carouselName}-right-btn`;
        this.lastTime = new Date().valueOf();
        this.width = width;

        this.makeInnerHTML();
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

    makeInnerHTML(){
        let child = this.render();
        this.ol.innerHTML = child;
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
        let moveChildText = this.ol.lastElementChild.outerHTML;
        this.ol.removeChild(this.ol.lastElementChild);
        this.translate(`translate(+${this.width}rem,0)`,"0.3s",`-${this.width}rem`);

        setTimeout(async()=>{
            this.ol.insertAdjacentHTML("afterbegin", moveChildText);
            this.translate("none","0s");
        },300);     
    }

    slideLeft(){ 
        let moveChildText = this.ol.firstElementChild.outerHTML;
        this.ol.removeChild(this.ol.firstElementChild);
        this.translate("none","0s","0");

        setTimeout(async()=>{
            this.ol.insertAdjacentHTML("beforeend", moveChildText);
            this.translate(`translate(-${this.width}rem,0)`,"0.3s");
        },300);    
    }

    translate(transform,time,left){
        this.ol.style.transform = transform;
        this.ol.style.transition = time;
         if(left !== undefined){
            this.ol.style.left = left;
        }
    }
}

export default slide;