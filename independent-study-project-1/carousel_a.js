const data=[
    {
        "id":1,
        "source":"assets/000022.JPG",
        "alt":"Five people taking photo with mascot",
        "figcaption":"Taking photo with my roommates (Photo by Ting-Huei Chen)"
    },
    {
        "id":2,
        "source":"assets/000021.JPG",
        "alt":"Mini sky train",
        "figcaption":"Nice weather especially in Taipei (Photo by Ting-Huei Chen)"
    },
    {
        "id":3,
        "source":"assets/000015.JPG",
        "alt":"A girl standing in front of ferris wheel",
        "figcaption":"We take picture at this spot evey year during our university time (Photo by Ting-Huei Chen)"
    },
    {
        "id":4,
        "source":"assets/000026.JPG",
        "alt":"People chasing each other",
        "figcaption":"I can't recall what happened but it looks hilarious (Photo by Ting-Huei Chen)"
    },
    {
        "id":5,
        "source":"assets/000030.JPG",
        "alt":"Two people riding carousel",
        "figcaption":"Don't know why but we actually enjoy this kids amusement park (Photo by Ting-Huei Chen)"
    }
]
let current=0;
const left = document.getElementById("left");
const right = document.getElementById("right");
const imageL = document.querySelector("figure:first-of-type img");
const image = document.getElementById("image");
const imageR = document.querySelector("figure:last-of-type img");
const figcaption = document.getElementById("figcaption");
const setImage = (index) =>{
    image.src=data[index]["source"];
    index+1>=data.length ? imageR.src=data[0]["source"] :imageR.src=data[index+1]["source"];
    index-1<0 ? imageL.src=data[data.length-1]["source"] : imageL.src=data[index-1]["source"];
    image.setAttribute("alt",data[index]["alt"]);
    image.id=data[index]["id"]
    figcaption.innerHTML=data[index]["figcaption"]
}
left.addEventListener("click",()=>{
    current++
    if(current>data.length-1){
        current=0;
    } 
    setImage(current);
})
right.addEventListener("click",()=>{
    current--
    if(current<0){
        current=data.length-1;
    } 
    setImage(current);
})