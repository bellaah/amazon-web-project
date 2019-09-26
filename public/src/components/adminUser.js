
let list;

const itemRender = (list) => {
    let childHTML = "";
    list.forEach(obj => {
        if(obj.admin < 99){
            childHTML += `
<tr>
    <th>${obj.user_id}</th>
    <td>${obj.user_name}</td>
    ${isAdmin(obj.admin,obj.user_id)}
</tr>
`
        }
    });
    return childHTML;
}

const isAdmin = (adminNumber,userID) => {
    return adminNumber >= 10 ? `<td><input id="${userID}" type="checkbox" checked/></td>` : `<td><input id="${userID}" type="checkbox"/></td>`;
}

const checkAdminListener = () => {
    let saveBtn = document.querySelector(".save-btn");
    saveBtn.addEventListener("click",(evt)=>{
        fetch('/admin/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode:"cors",
            body: JSON.stringify(matchIdAndCheckbox())
        });
    });
}

const matchIdAndCheckbox = () => {
    let idCheckboxList = [];
    let userList = document.querySelectorAll("tbody > tr");
    userList.forEach(elem => {
        let userElment = elem.querySelector("input");
       idCheckboxList.push({
           id : userElment.id,
           admin : userElment.checked ? 10 : 0
        })
    })
    return idCheckboxList;
}

(async() => {
    list = await fetch('/admin/userList')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data;
    })
    console.log(list);
    document.querySelector(".user-table").innerHTML = itemRender(list);
    checkAdminListener();
})()
