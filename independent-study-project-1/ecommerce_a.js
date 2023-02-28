// get buttons
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const num = document.getElementById("num");
const cartBtn = document.querySelector("#cartToggle>button");
const addCart = document.getElementById("addCart");
// get cart
const cart = document.getElementById("cart");
// Get product info
let productName = document.querySelector("#product h2").innerHTML;
let productImg = document.querySelector(".main-img img").src;
let productPrice = document.querySelector("#price").innerHTML;
let imgArr = document.querySelectorAll(".alt-img img")
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
addCart.addEventListener("click",()=>{
    console.log("addCart");
    addIntoCart();
    cartBtn.click();
    document.querySelector("#cart button").classList.remove("hidden");
})
cartBtn.addEventListener("click",()=>{
    cart.classList.toggle("hidden");
})
const addIntoCart = () => {
    let newItem = `<li><div class="imgBox"><img src="${productImg}" alt="" /></div> <p><span>${productName}</span><span>${"$"+productPrice}</span> x <span>${amount}</span> <b>${"$"+amount*productPrice}</b></p></li>`;
    if(document.querySelector("#cartItems li")===null){
        cartItems.innerHTML=newItem;
    }else{
        console.log(document.querySelector("#cartItems li"));
        let current = cartItems.innerHTML;
        cartItems.innerHTML= current + newItem;
    }
}

// breakpoints
window.addEventListener("resize",()=>{
    let size = window.innerWidth;
    if(size<1060){
        menu.classList.remove("hidden");
        
        document.querySelector("header nav").classList="hidden";
    }else{
        menu.classList.add("hidden");
        document.querySelector("header nav").classList.remove("hidden");
    }
})
// menu
menu.addEventListener("click",()=>{
    document.querySelector("header nav").classList.toggle("hidden");
    menu.classList.toggle("float");
    document.querySelector("body::before").style.display="block";
})
// change image
imgArr.forEach((img,index) => {
    img.addEventListener("click",(e)=>{
        document.querySelector(".current-image").classList.remove("current-image");
        e.target.parentElement.classList.add("current-image");
        document.querySelector(".main-img img").src = `./assets/image-product-${index+1}.jpg`;

    })
});
