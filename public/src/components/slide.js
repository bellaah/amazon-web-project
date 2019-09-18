class slide{
    constructor(olName,carouselName,width){
        this.classname = olName;
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
                this.slide(false);
                this.lastTime = new Date().valueOf();
            }else if(evt.target.className === this.rightBtn){
                this.slide(true);
                this.lastTime = new Date().valueOf();
            }
        });
    }

    makeInnerHTML(){
        let child = this.render();
        this.ol.innerHTML = child;
    }

    run(){
        let now = new Date().valueOf();
        if(now - this.lastTime >= 3000){
            this.slide(true);
            this.lastTime = new Date().valueOf();
        }
        setTimeout(()=>{
            this.run();
        },500);
    }

    slide(direction){  //direction:true(left),direction:false(right)
        let addPosition,moveIdx,param;

        if(direction){
            addPosition = "beforeend";
            moveIdx = this.ol.firstElementChild;
            param = [{translate:"none",time:"0s",left:"0"},
                    {translate:`translate(-${this.width},0)`,time:"0.3s"}];
        }else{
            addPosition = "afterbegin";
            moveIdx = this.ol.lastElementChild;
            param = [{translate:`translate(+${this.width},0)`,time:"0.3s"},
                    {translate:"none",time:"0s",left:`-${this.width}`}];
        }
       
        let moveChildText = moveIdx.outerHTML;
        this.ol.removeChild(moveIdx);
        this.translate(param[0]);

        setTimeout(()=>{
            this.translate(param[1]);
            this.ol.insertAdjacentHTML(addPosition, moveChildText);
        },300);
            
    }

    translate(obj){
        console.log(obj);
        this.ol.style.transform = obj.translate;
        this.ol.style.transition = obj.time;
        if(obj.left !== undefined){
            this.ol.style.left = obj.left;
        }
    }
}

export default slide;