var randomNum =Math.floor(Math.random() * 10);
// var url =
//   "https://api.unsplash.com/search/photos/?query=rice&client_id=LVlqvl5R5gtId0y5-bb-SkraI0ZgSltaXPKo51HbS2o&per_page="+randomNum;



var container = document.querySelector("#container");

function loadImg(meal,searchTerm){
    // console.log("meal="+meal);
    let url =
  "https://api.unsplash.com/search/photos/?query="+searchTerm+"&client_id=b-rrqe7bytE54qyNIBzSz_SYMLKQ5fVWsblsjjoRDT0&per_page="+randomNum;
    fetch(url)
    .then(response=>{
        console.log(response);
        if(response.ok)
            return response.json();
    })
    .then(data=>{
        const imageNodes = [];
        for(let i = 0; i < data.results.length; i++){
            
            imageNodes[i] = document.querySelector("#"+meal+" .imgBox");
           
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'
           
        }
    })
}


var mainArr = ["Ramen","noodle","pasta","fried rice","hamburger","bacon","sandwich","Avocado roll","BBQ","Burrito","Italian bread","Butter chicken","Lasagna","Pizza","Sushi","Salmon","French toast","Grilled chicken","Tempura","Taco","Seafood pasta","Pasta Bolognese","Hot pot","Kimbap"];
var drinksArr = ["soda","black tea","Bubble tea","corn soup","tofu soup","Juice","Beer","Matcha tea", "Ice tea","Wine","Smoothie","Lemonade"];
var sideArr = ["cucumber","Salad","Dumplings","Fries","Chicken wings","Baked beans","Cupcakes","donuts","Egg roll","Ice cream","French dip","Hash browns","Waffles","Takoyaki","Cake","Baked potato","Smoked salmon","Vegetable stew"];
const genBtn = document.getElementById("generate");
const main = document.getElementById("main");
const side = document.getElementById("side");
const drinks = document.getElementById("drinks");

function randomElem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
function generateMeal(){
    
    let repeat = ["main","side","drinks"];
    for(let i of repeat){
        
        let elem = randomElem(window[i+"Arr"]);
        // console.log("generate meal="+i);
        
        loadImg(i,elem);
        let card = document.getElementById(i);
        
        card.querySelector("h4").innerHTML= elem;
        card.querySelector("a:first-of-type").href="https://www.google.com/maps/search/"+elem+"+near+me";
        card.querySelector("a:last-of-type").href="https://www.google.com/search?q="+elem+"+recipe";
        
    };

}

genBtn.addEventListener("click",()=>{
    document.querySelector("#container").style.opacity = "1";
    generateMeal();
    genBtn.innerHTML="Another one";
});