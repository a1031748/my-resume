const btn = document.querySelector('.btn');

function submit(){
    let nickName = document.querySelector(".nickname");
    let nickNameValue = document.querySelector("input[type = text]").value;
    let nickNameAlert = nickName.children[2];
    console.log(nickName);
    console.log(nickNameValue.trim());
    console.log(nickNameAlert);
    if( nickNameValue.trim() === "" || nickNameValue.lengtn >= 40){
        nickNameAlert.style.display = "block";
    }else{
        nickNameAlert.style.display = "none";
    };

    let email = document.querySelector(".email");
    let emailValue = document.querySelector("input[type = email]").value;
    let emailAlert = email.children[2];
    console.log(emailValue);
    console.log(emailAlert);
    if(emailValue.trim() === "" || !emailValue.includes('@')){
         emailAlert.style.display = "block";
     }else{
         emailAlert.style.display = "none";
     };
    let password = document.querySelector(".password");
    let passwordValue = document.querySelector("input[type = password]").value;
    let passwordAlert = password.children[2];
    console.log(passwordValue);
    if( passwordValue.trim() === "" || passwordValue.length >= 8 || passwordValue.length <= 100){
        passwordAlert.style.display = "block";
     }else{
        passwordAlert.style.display = "none";
     };

   
};

