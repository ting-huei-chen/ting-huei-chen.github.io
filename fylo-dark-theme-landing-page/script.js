var errormsg = document.getElementById("formerror");
errormsg.style.display="none";
var submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click",(e)=>{
    var userEmail = document.querySelector("input[name=email]");
    event.preventDefault();
    console.log(userEmail.value)
    if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(userEmail)){
        errormsg.style.display="block";
    }
});