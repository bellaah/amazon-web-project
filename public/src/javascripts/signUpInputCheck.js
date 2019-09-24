const idChecker = {
    registerEvent() {
        const idInput = document.querySelector("#id_input");
        idInput.addEventListener("input", () => {
            this.idCheck(idInput.value);
        })
        idInput.addEventListener("focusout",() => {
            this.duplicateCheck(idInput.value)
        })
    },
    idCheck(idInput) {
        const idSpan = document.querySelector("#id_check");
        const idRegExp = /^[A-Za-z0-9-_]{5,20}$/;

        if(!idRegExp.test(idInput)){
            changeAttribute(idSpan,"red_text","5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.");
        }else{
            changeAttribute(idSpan,"green_text","사용 가능한 아이디입니다.");
        }
    },
    duplicateCheck(idInput) {
        const idSpan = document.querySelector("#id_check");
        axios({
            method: 'post',
            url: '/dbCheck/duplicateCheck',
            data: {
                id : idInput
            }
        }).then(res => {
            if(res.data){
                changeAttribute(idSpan,"red_text","이미 사용중인 아이디입니다.");
            }
        }).catch(error => {
            console.log(error);
        });
    }
}

const pwdChecker= {
    registerEvent() {
        const pwdInput = document.querySelector("#pwd_input");
        const pwdConfirmInput = document.querySelector("#pwd_confirm_input");
        pwdInput.addEventListener("input", () => {
            this.pwdCheck(pwdInput);
            if(pwdConfirmInput.value !== ''){
                this.pwdConfirmCheck(pwdConfirmInput,pwdInput);
            }
        })
        pwdConfirmInput.addEventListener("input", () => {
            this.pwdConfirmCheck(pwdConfirmInput,pwdInput);
        })
    },
    pwdCheck(pwdInput) {
        const pwdSpan = document.querySelector("#pwd_check");

        if(pwdInput.value.length < 8 || pwdInput.value.length > 17){
            changeAttribute(pwdSpan,"red_text","8자 이상 16자 이하로 입력해주세요.");
        }else if(!(new RegExp(/[A-Z]/)).test(pwdInput.value)){
            changeAttribute(pwdSpan,"red_text","영문 대문자를 최소 1자 이상 포함해주세요.");
        }else if(!(new RegExp(/[0-9]/)).test(pwdInput.value)){
            changeAttribute(pwdSpan,"red_text","숫자를 최소 1자 이상 포함해주세요.");
        }else if(!(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi)).test(pwdInput.value)){
            changeAttribute(pwdSpan,"red_text","특수문자를 최소 1자 이상 포함해주세요.");
        }else{
            changeAttribute(pwdSpan,"green_text","안전한 비밀번호입니다.");
        }
    },
    pwdConfirmCheck(pwdConfirmInput,pwdInput) {
        const pwdConfirmSpan = document.querySelector("#pwd_confirm_check");
        if(pwdConfirmInput.value !== pwdInput.value){
            changeAttribute(pwdConfirmSpan,"red_text","비밀번호가 일치하지 않습니다.");
        }else{
            changeAttribute(pwdConfirmSpan,"green_text","비밀번호가 일치합니다.");
        }
    }
}

const nameChecker = {
    registerEvent() {
        const nameInput = document.querySelector("#name_input");
        nameInput.addEventListener("input", () => {
            this.nameCheck(nameInput);
        })
    },
    nameCheck(nameInput) {
        const nameSpan = document.querySelector("#name_check");
        if(nameInput.value == ""){
            changeAttribute(nameSpan,"red_text","");
        }else{
            changeAttribute(nameSpan,"green_text","");
        }
    }
}

const genderChecker = {
    registerEvent() {
        const genderInput = document.querySelector("#gender_input");
        genderInput.addEventListener("input", () => {
            this.genderCheck(genderInput);
        })
    },
    genderCheck(genderInput) {
        const genderSpan = document.querySelector("#gender_check");
        if(genderInput.value == "성별"){
            changeAttribute(genderSpan,"red_text","");
        }else{
            changeAttribute(genderSpan,"green_text","");
        }
    }
}

const birthChecker = {
    registerEvent() {
        const monthInput = document.querySelector("#month_input");
        const dayInput = document.querySelector("#day_input");
        const yearInput = document.querySelector("#year_input");

        this.checkAllListener(monthInput,dayInput,yearInput);
        this.checkAllListener(dayInput,dayInput,yearInput);
        this.checkAllListener(yearInput,dayInput,yearInput);
    },
    yearCheck(yearInput) {
        let bool = false;
        const birthSpan = document.querySelector("#birth_check");
        let date = new Date();

        if(yearInput === ""){
            changeAttribute(birthSpan,"red_text","");
            return false;
        }else if(new RegExp(/[^0-9]/g).test(yearInput.value) || yearInput.value.length < 4){
            changeAttribute(birthSpan,"red_text","태어난 년도 4자리를 정확하게 입력하세요.");
        }else{
            if(date.getFullYear()-yearInput.value > 98){
                changeAttribute(birthSpan,"red_text","99세 이하만 가입 가능합니다.");
            }else if(date.getFullYear()-yearInput.value < 14){
                changeAttribute(birthSpan,"red_text","만 14세 이상만 가입 가능합니다.");
            }else{
                bool = true;
            }
        }
        return bool;
    },
    dayCheck(dayInput) {
        let bool = false;
        const yearInput = document.querySelector("#year_input");
        const birthSpan = document.querySelector("#birth_check");
        const monthInput = document.querySelector("#month_input");
        let lastDay = (new Date(yearInput.value, monthInput.value ,0)).getDate();

        if(dayInput === "" || monthInput.value === "월"){
            changeAttribute(birthSpan,"red_text","");
            return false;
        }else if(new RegExp(/[^0-9]/g).test(dayInput.value)){
            changeAttribute(birthSpan,"red_text","숫자만 입력가능합니다.");
        }else if(lastDay < dayInput.value){
            changeAttribute(birthSpan,"red_text","태어난 날짜를 다시 확인해주세요.");
        }else{
            bool = true;
        }
        return bool;
    },
    checkAllListener(input,dayInput,yearInput){
        const birthSpan = document.querySelector("#birth_check");
        input.addEventListener("input", () => {
            let dayValue =this.dayCheck(dayInput);
            let yearValue = this.yearCheck(yearInput);
            if(dayValue && yearValue){
                changeAttribute(birthSpan,"green_text","");
            }
        })
    }
}

const emailChecker = {
    registerEvent() {
        const emailInput = document.querySelector("#email_input");
        emailInput.addEventListener("input", () => {
            this.emailCheck(emailInput);
        })
    },
    emailCheck(emailInput) {
        const emailSpan = document.querySelector("#email_check");
        let emailRegExp = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

        if(!emailRegExp.test(emailInput.value)){
            changeAttribute(emailSpan,"red_text","이메일 주소를 다시 확인해주세요.");
        }else{
            changeAttribute(emailSpan,"green_text","");
        }
    }
}

const phoneChecker = {
    registerEvent() {
        const phoneInput = document.querySelector("#phone_input");
        phoneInput.addEventListener("input", () => {
            this.phoneCheck(phoneInput);
        })
    },
    phoneCheck(phoneInput) {
        const phoneSpan = document.querySelector("#phone_check");
        let numberRegExp = /^010\d{3,4}\d{4}$/;

        if(!numberRegExp.test(phoneInput.value)){
            changeAttribute(phoneSpan,"red_text","형식에 맞지 않는 번호입니다.");
        }else{
            changeAttribute(phoneSpan,"green_text","");
        }
    }
}

const interestChecker = {
    registerEvent() {
        const interestInput = document.querySelector("#interest_input");
        interestInput.addEventListener("input", () =>{
            this.interestCheck(interestInput);
        })
        interestInput.addEventListener("keydown", (event) =>{
            if(interestInput.selectionStart === 0 && event.KeyCode == 13){
                this.back(event);
            }
        })
    },
    interestCheck(interestInput) {
        const interestSpan = document.querySelector("#interest_check");
        const tagList = document.querySelector(".tag_list");

        if(interestInput.value[interestInput.value.length-1] === ","){
            if(interestInput.value.length > 1){
                let tag = interestInput.value.substring(0,interestInput.value.length-1);
                tagList.insertAdjacentHTML('beforeend',
                `<div class="tag"><span>${tag}</span><button class="tag_btn" onclick="RemoveItself(this)">X</button></div>`);
            }
            interestInput.value = "";
        }
        
        if(tagList.childElementCount < 3){
            changeAttribute(interestSpan,"red_text","3개 이상의 관심사를 입력하세요.");
        }else{
            changeAttribute(interestSpan,"green_text","");
        }

    },
    back(event){
        const interestInput = document.querySelector("#interest_input");
        if (event.keyCode == 8 || event.keyCode == 64) {
            const tagList = document.querySelector(".tag_list");
            const lastTagValue = tagList.lastChild.firstChild.innerHTML;
            tagList.removeChild(tagList.lastChild);
            interestInput.value = lastTagValue + interestInput.value + " ";
        }
    }
}

const termsChecker = {
    registerEvent(){
        const termsCheckbox = document.querySelector("#terms_input");
        termsCheckbox.addEventListener("change", (event) =>{
            this.termsCheck(termsCheckbox);
        })
    },
    termsCheck(termsCheckbox){
        const termsSpan = document.querySelector("#terms_check");
        if(termsCheckbox.checked){
            changeAttribute(termsSpan,"green_text","");
        }else{
            changeAttribute(termsSpan,"red_text",""); 
        }
    }
}

const changeAttribute = (selector,className,str) => {
    selector.className = className;
    selector.innerHTML = str;
}

const registerEventListener = () => {
    idChecker.registerEvent();
    nameChecker.registerEvent();
    genderChecker.registerEvent();
    emailChecker.registerEvent();
    phoneChecker.registerEvent();
    interestChecker.registerEvent();
    birthChecker.registerEvent();
    pwdChecker.registerEvent();
    termsChecker.registerEvent();
}
registerEventListener();