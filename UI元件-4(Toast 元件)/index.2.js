const success = document.querySelector(".toast-success");
const error = document.querySelector(".toast-error");
function toastSuccess() {
  console.log(success);
  success.style.display = "block";

  setTimeout(function () {
    success.style.display = "none";
  }, 3000);
}

function toastError(){
    error.style.display = "block";
    setTimeout(function(){
        error.style.display = "none";
    },3000)
}
