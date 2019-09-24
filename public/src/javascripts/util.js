const tagDiv = document.querySelector(".tag_div");

const $ = (name) => {
    return document.querySelector(name);
}

const focusIn = () => {
    tagDiv.style.borderColor='#2cb400';
}

const focusOut = () => {
    tagDiv.style.borderColor='#dadada';
}

const scrolled = (obj) => {
    const agreeBtn =  document.querySelector(".layer_green_btn");
    if(obj.offsetHeight + obj.scrollTop >= obj.scrollHeight){
        agreeBtn.disabled = false;
    }
}

const RemoveItself = (elem) => {
    let item = elem.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}

const customReset = () => {
    const registerForm = document.querySelector(".register_form");
    registerForm.reset();
    resetTag();
    resetSpan();
    closeLayer();
}

const resetTag = () => {
    const tagList = document.querySelector(".tag_list");
    removeChildAll(tagList);
}

const resetSpan = () => {
    const redSpan = document.querySelectorAll(".red_text");
    const greenSpan = document.querySelectorAll(".green_text");

    redSpan.forEach(elem => {
        elem.innerHTML = "";
    });
    greenSpan.forEach(elem => {
        elem.innerHTML = "";
    });
}

const removeChildAll = (parent) => {
    while (parent.hasChildNodes()){
        parent.removeChild(parent.firstChild); 
    }
}

const termsAgree = () => {
    const termsCheckbox =  document.querySelector("#terms_input");
    termsCheckbox.disabled = false;
    termsCheckbox.checked = true;
    termsChecker.termsCheck(termsCheckbox);
    closeLayer();
}

const checkAll = () => {
    let returnValue = checkInputAll();
    if(returnValue.length == 0){   //input 모두 만족
        const jsonData = makeJSON();
        axios({
            method: 'post',
            url: '/dbCheck/registerUser',
            data: jsonData
        }).then(res => {
            document.forms[0].submit();
        })
    }else{  //input 빈 항목이 있거나 red text가 떴을 경우
        registerLayer(returnValue);
    }
}

const makeJSON = () => {
    let tagStr = makeInterestListStr();
    let json = {
        id : $("#id_input").value,
        password : $("#pwd_input").value,
        name : $("#name_input").value,
        birthday : `${$("#year_input").value}.${$("#month_input").value}.${$("#day_input").value}`,
        gender : $("#gender_input").value,
        email : $("#email_input").value,
        phone : $("#phone_input").value,
        interestList : tagStr.substring(0,tagStr.length-1),
    };
    return json;
}

const makeInterestListStr = () => {
    let tagStr = "";
    const tagList =  document.querySelectorAll(".tag span");
    tagList.forEach(elem => {
        tagStr += `${elem.innerText},`;
    })
    return tagStr;
}

const checkInputAll = () => {
    const redSpan =  document.querySelectorAll(".red_text");
    let errorText = {id_check : "아이디를 형식에 맞게 입력해주세요.",
                    pwd_check : "비밀번호를 형식에 맞게 입력해주세요.",
                    pwd_confirm_check : "비밀번호가 일치하지 않습니다.",
                    name_check : "이름을 입력해주세요.",
                    birth_check : "생년월일을 형식에 맞게 입력해주세요.",
                    gender_check : "성별을 입력해주세요.",
                    email_check : "이메일을 형식에 맞게 입력해주세요.",
                    phone_check : "휴대전화를 형식에 맞게 입력해주세요.",
                    interest_check : "관심사를 3개 이상 입력해주세요.",
                    terms_check : "약관에 동의해주세요."};
    const redList = [];

    redSpan.forEach(elem => {
        redList.push(errorText[elem.id]);
    })
    return redList;
}
