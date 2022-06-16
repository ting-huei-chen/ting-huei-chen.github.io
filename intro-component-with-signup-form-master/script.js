var fields = document.querySelectorAll("input");
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("submit",function(){
    for(let i=0; i< fields.length-1; i++){
        if(fields[i].value==""){
            fields[i].style.border="solid 2px var(--red)";
            fields[i].style.background="url(images/icon-error.svg) 93% no-repeat";
            fields[i].nextElementSibling.innerHTML=fields[i].getAttribute("placeholder")+" cannot be empty";
        }else{
            fields[i].style.border="solid 1px var(--grey)";
            fields[i].style.background="none";
            fields[i].nextElementSibling.innerHTML="";
        }
    }
    var email= document.querySelector("input[type=email]");
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)){
        email.style.border="solid 1px var(--grey)";
    }else if(email.value!=""){
        email.nextElementSibling.innerHTML="Looks like this is not an email";
        email.style.color="var(--red)";
        email.style.background="url(images/icon-error.svg) 95% no-repeat"
    }
})
