//loginModal()
//postModal()

function cancel(){
    let loginModal = document.getElementById("login-modal");
    console.log(loginModal);
    loginModal.remove();
}

function loginModal(){
    let loginModal = document.getElementById("login-modal");
    loginModal.style.display = "block";
}