// get buttons
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const num = document.getElementById("num");
const cartBtn = document.querySelector("#cartToggle");
const cartClose = document.querySelector("#cart i");
const addCart = document.getElementById("addCart");
// get cart
const form = document.querySelector("form");
const cart = document.getElementById("cart");
// Get product info
let productName = document.querySelector("#product h2").innerHTML;
let productImg = document.querySelector(".product-img img").src;
let productPrice = document.querySelector("#price").innerHTML;

// get innitial product count
let amount = parseInt(num.value);

// input value controller
minus.addEventListener("click",()=>{
    amount>0 ? amount--:"";
    num.value=amount;   
})
plus.addEventListener("click",()=>{
    amount<10 ? amount++:"";
    num.value=amount;
})
form.addEventListener("submit",()=>{
    console.log("addCart");
    console.log([productName,productImg,productPrice])
    addIntoCart(productName,productImg,num.value,productPrice);
    cartBtn.click();
    // document.querySelector("#cart button").classList.remove("hidden");
})
cartBtn.addEventListener("click",()=>{
    cart.classList.remove("hidden");
})
cartClose.addEventListener("click",()=>{
    cart.classList.add("hidden");
})

const addIntoCart = (name,img,num,price) => {
    let newItem = `<li class="group"><div class="imgBox"><img src="${img}" alt="" /></div> <p><span>${name}</span><br><span>${"$"+price}</span> x <span>${num}</span> <b>${"$"+num*parseInt(price)}</b></p></li>`;
    if(document.querySelector("#cartItems li")===null){
        cartItems.innerHTML=newItem;
        total.innerHTML=num*parseInt(price);
    }else{
        console.log(document.querySelector("#cartItems li"));
        let current = cartItems.innerHTML;
        let currTotal = parseInt(total.innerHTML);
        cartItems.innerHTML= current + newItem;
        total.innerHTML=currTotal+num*parseInt(price);
    }
}

// breakpoints
window.addEventListener("resize",()=>{
    let size = window.innerWidth;
    if(size<600){
        document.querySelector("header nav").classList="hidden";
        menu.classList.remove("float");
        
    }else{
        document.querySelector("header nav").classList.remove("hidden");
    }
    cart.classList.add("hidden");
    
})
// menu
menu.addEventListener("click",()=>{
    document.querySelector("header nav").classList.toggle("hidden");
    menu.classList.toggle("float");
    document.querySelector("body::before").style.display="block";
})

