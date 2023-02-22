const priceToggle = document.getElementById("toggle");
const cycle = document.querySelectorAll(".cycle");
const price = document.querySelectorAll(".priceNum");
const priceArr = [[9.99,109.99],[19.99,229.99],[29.99,339.99]]
let cycleArr =["month","year"];
priceToggle.addEventListener("change",()=>{
    let cycleBool = priceToggle.checked ? 1 : 0;
    cycle.forEach(elem=>elem.innerHTML=cycleArr[cycleBool]);
    price.forEach((elem,index)=>elem.innerHTML=priceArr[index][cycleBool]);
})