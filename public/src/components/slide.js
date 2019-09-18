class slide{
    constructor(olName,carouselName){
        this.classname = olName;
        this.carousel = document.querySelector(`.${carouselName}`);
        this.ol = document.querySelector(`.${olName}`);
        this.leftBtn = document.querySelector(`.${carouselName}-left-btn`);
        this.rightBtn = document.querySelector(`.${carouselName}-right-btn`);
        this.addEventListener();
    }
    
    addEventListener(){
        this.carousel.addEventListener("click",(evt)=>{
            console.log(evt.target.className);
            if(evt.target.className === this.leftBtn.className) {
                this.slide(false);
            }else if(evt.target.className === this.rightBtn.className){
                this.slide(true);
            }
        });
    }
    
    makeInnerHTML(){
        let child = this.render();
        this.ol.innerHTML = child;
    }

    run(){
        setInterval(() => {
            this.slide(true);
        },3000);
    }

    slide(direction){  //direction:true(left),direction:false(right)
        let addPosition,moveIdx,classList;

        if(direction){
            addPosition = "beforeend";
            moveIdx = this.ol.firstElementChild;
            classList = [{classname:"trans-none",left:"0"},{classname:"trans-left"}];
        }else{
            addPosition = "afterbegin";
            moveIdx = this.ol.lastElementChild;
            classList = [{classname:"trans-right"},{classname:"trans-none",left:"-15rem"}];
        }
       
        let moveChildText = moveIdx.outerHTML;
        this.ol.removeChild(moveIdx);
        this.translate(classList[0]);

        setTimeout(()=>{
            this.translate(classList[1]);
            this.ol.insertAdjacentHTML(addPosition, moveChildText);
        },300);
    }

    translate(obj){
        this.ol.className = this.classname;
        this.ol.classList.add(obj.classname);
        if(obj.left !== undefined){
            this.ol.style.left = obj.left;
        }
    }
}

export default slide;