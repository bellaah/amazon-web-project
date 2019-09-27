const header = document.querySelector("header");

header.addEventListener("click",(evt)=>{
    if(evt.target.className === "sign-in-btn") {
        window.location.href = '/signIn';
    }else if(evt.target.className === "sign-up-btn"){
        window.location.href = '/signUp';
    }else if(evt.target.className === "log-out-btn"){
        window.location.href = '/logOut';
    }
});

