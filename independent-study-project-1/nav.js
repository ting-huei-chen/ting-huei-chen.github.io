const navHeading = document.querySelectorAll("nav li span");
const nav = document.getElementById("mainNav");
const navItem = document.querySelectorAll(".menu-item");
const catagoryBtn = document.getElementById("catagoryBtn")
const catagoryList = document.getElementById("catagoryList")
let menuCollapse = 0;
// menuCollapse 0 : not collapse, menuCollapse 1: collapse
console.log(navHeading);
function collapseSwitch(){
    if(menuCollapse){
        navItem.forEach(elem=>elem.classList.remove("rail-item"));
        nav.classList.remove("rail")
        navHeading.forEach(elem=>setTimeout(()=>elem.classList.remove("hidden"), 200));
        console.log("else:",menuCollapse);
        menuCollapse=0
    }else{
        navItem.forEach(elem=>elem.classList.add("rail-item"));
        if(catagoryList.classList==""){
            collapseList(catagoryList);
        }
        nav.classList.add("rail")
        navHeading.forEach(elem=>setTimeout(()=>elem.classList.add("hidden"), 200));      
        menuCollapse=1;    
    }
}
menu.addEventListener("click",()=>collapseSwitch(menuCollapse));
collapseList(catagoryList);
collapseSwitch();
function collapseList(ul){
    if(menuCollapse){
        setTimeout(()=>ul.classList.toggle("hidden"), 200);
        collapseSwitch();
    }else{
        ul.classList.toggle("hidden");
    }
}
catagoryBtn.addEventListener("click",()=>collapseList(catagoryList));
