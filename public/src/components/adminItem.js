let list;

const itemRender = (category) =>{
    let childHTML = "";
    let count=0;
    list.forEach(obj => {
        if(obj.category === category){
            childHTML += `
<li id="bottom-${count}">
    <img src=${obj.image}></img>
    <div class="main-text">
        <span class="main-text-title category-${obj.category}">keyword:${obj.keyword}</span><br/>
        <span class="main-text-header">title:${obj.title}</span>
        <div class="main-text-description">description:${obj.description}</div>
        <a class="main-text-link" href=${obj.link}>
            link:${obj.tail}
        </a>
        <button class="delete-btn" id="delete-btn-${obj.seq}"> 삭제 </button>
    </div>
</li>`
        }
    });
    return childHTML;
}

const removeBtnListener = () => {
    let deleteBtnList = document.querySelectorAll(".delete-btn");
    deleteBtnList.forEach(elem => {
        elem.addEventListener("click",(evt)=>{ 
            console.log(elem.id.split("-")[2]);
            fetch('/removeItem', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({seq : elem.id.split("-")[2]})
            });
        });
    });
}

(async() => {
    list = await fetch('/MainCarouselList')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
    document.querySelector(".ship-div").innerHTML = itemRender("ship");
    document.querySelector(".stream-div").innerHTML = itemRender("stream");
    document.querySelector(".shop-div").innerHTML = itemRender("shop");
    document.querySelector(".read-div").innerHTML = itemRender("read");
    document.querySelector(".more-div").innerHTML = itemRender("more");
    removeBtnListener();
})()
