const password = document.getElementById("password");
const email = document.getElementById("email");
const msg =document.getElementById("error");
password.addEventListener("change",()=>{
    if(password.value.length<8){
        msg.classList.remove("hidden");
    }else{
        msg.classList.add("hidden");
    }
})