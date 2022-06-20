const priceArr = [8,12,16,24,36];
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
    switch(slider) {
        case '1':
            traffic.innerHTML=10+"K";
            price.innerHTML=newArr[0].toFixed(2);
          break;
        case '2':
            traffic.innerHTML=50+"K";
            price.innerHTML=newArr[1].toFixed(2);
          break;
        case '3':
            traffic.innerHTML=100+"K";
            price.innerHTML=newArr[2].toFixed(2);
          break;
        case '4':
            traffic.innerHTML=500+"K";
            price.innerHTML=newArr[3].toFixed(2);
          break;
        case '5':
            traffic.innerHTML=1+"M";
            price.innerHTML=newArr[4].toFixed(2);
            break;
        default:
            traffic.innerHTML=10+"K";
            price.innerHTML=newArr[0].toFixed(2);
    }
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