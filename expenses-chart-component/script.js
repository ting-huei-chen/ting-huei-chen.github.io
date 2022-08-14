// JSON access
const req = new XMLHttpRequest();
req.open("GET",'data.json',true);
req.send();
req.onload = function(){
const json = JSON.parse(req.responseText);
 var vals = [];
 var days = []
  json.forEach(element => {
    vals.push(element.amount);
    days.push(element.day);
  });

//   bar chart
const w = 300;
const h = 200;

const svg = d3.select("#infoBox")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
// bars
svg.selectAll("rect")
    .data(vals)
    .enter()
    .append("rect")
    .attr("class","bar")
    .attr("x",(d,i)=>{
        return i*14.5+2+"%"
    })
    .attr("y",(d,i)=>{
        return h-d*3
    })
    .attr("width","10%")
    .attr("height",(d,i)=>d*3)
    .attr("rx",5)
    .attr("ry",5)
    .attr("fill",(d,i)=>{
        if(d>50){
            return "var(--cyan)";
        }else{
            return "var(--red)";
        }
    });
// tool tips
var group = svg.selectAll("g")
    .data(vals)
    .enter()
    .append("g")
    .attr("class", "tip")
    .attr("opacity", "0")
    .attr("x", (d, i) => i*14.5+2+"%")
    .attr("y", (d, i) => h - 3 * d-40);

group.append("rect")
    .attr("x", (d, i) => i*14.5+"%")
    .attr("y", (d, i) => h - 3 * d-40)
    .attr("width","clamp(3rem,13%,4rem)")
    .attr("height",30)
    .attr("rx",5)
    .attr("ry",5)
    .attr("fill","var(--dbrown)");

group.append("text")
    .attr("x", (d, i) => i*14.5+1.5+"%")
    .attr("y", (d, i) => h - 3 * d-20)
    .style("font-size", ".8rem")
    .attr("fill","var(--lorange)")
    .text((d,i)=>"$"+d);

    var bars = document.getElementsByClassName("bar");
    var tips = document.getElementsByClassName("tip")
 
    for(let i = 0; i <bars.length; i++){
        bars[i].addEventListener("mouseover",()=>{
            tips[i].style.opacity="1";
        })
        bars[i].addEventListener("mouseleave",()=>{
            tips[i].style.opacity="0";
        })
    }
};

