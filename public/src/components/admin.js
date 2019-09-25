
function itemRender(category){
    let childHTML = "";
    data.forEach((obj,idx) => {
        if(obj.category === category){
        childHTML += `
<li id="bottom-${idx}" class="${obj.title}-li">
<img src=${obj.image}></img>
<div class="main-text">
    <span class="main-text-title category-${obj.category}">keyword : ${obj.title}</span><br/>
    <span class="main-text-header">title : ${obj.head}</span>
    <div class="main-text-description">description : ${obj.body}</div>
    <a class="main-text-link" href=${obj.link}>
       link : ${obj.tail}
    </a>
</div>
</li>`
        }
});
    return childHTML;
}

document.querySelector(".ship-div").innerHTML = itemRender("ship");
document.querySelector(".stream-div").innerHTML = itemRender("stream");
document.querySelector(".shop-div").innerHTML = itemRender("shop");
document.querySelector(".read-div").innerHTML = itemRender("read");
document.querySelector(".more-div").innerHTML = itemRender("more");
