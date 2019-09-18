class slide{
    constructor(ol){
        this.classname = ol;
        this.ol = document.querySelector(`.${ol}`);
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
        let moveIdx,classList,addPosition;

        if(direction){
            moveIdx = this.ol.firstElementChild;
            classList = [{classname:"trans-none",left:"0"},{classname:"trans-left"}];
            addPosition = "beforeend";
        }else{
            moveIdx = this.ol.lastElementChild;
            classList = [{classname:"trans-right"},{classname:"trans-none",left:"-15rem"}];
            addPosition = "afterbegin";
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