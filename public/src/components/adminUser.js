let list;
(async function(){
    list = await fetch('/adminUserList')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
    document.querySelector(".user-table").innerHTML = itemRender(list);
})()

function itemRender(list){
    let childHTML = "";
    list.forEach(obj => {
        childHTML += `
<tr>
    <th>${obj.user_id}</th>
    <td>${obj.user_name}</td>
    <td>${obj.admin}</td>
</tr>
`
    });
    return childHTML;
}
