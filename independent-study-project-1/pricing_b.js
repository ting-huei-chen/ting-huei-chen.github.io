const priceArr = [22,36,48,56,96];
const viewArr = ["10K","50K","100K","500K","1M"];
const traffic = document.getElementById("traffic");
const price = document.getElementById("price");
const togg = document.getElementById("toggle");
document.getElementById("slider").addEventListener("change",function(){
    let slider = document.getElementById("slider").value;
    let newArr =[]
    if(togg.checked){
        priceArr.forEach(e => newArr.push(e*0.75));
    }else{
        newArr = priceArr;
    }
    traffic.innerHTML=viewArr[slider-1];
    price.innerHTML=newArr[slider-1].toFixed(2);
})

togg.addEventListener("change",function(){
    if(togg.checked){
        console.log("checked");
        let discount = price.innerHTML*0.75;
        price.innerHTML =discount.toFixed(2);
    }else{
        let oprice=price.innerHTML/0.75;
        price.innerHTML=oprice.toFixed(2);
        console.log("else unchecked");
    }
})
if(window.innerWidth<600){
    document.querySelector('.tag').innerHTML="-25%";
}
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }