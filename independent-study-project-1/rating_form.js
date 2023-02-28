let getSiblings = function (elem) {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  let opt = document.querySelectorAll("input[name=rate]");
  for (let i of opt) {
    i.addEventListener("click", function () {
      let rateNum = "label[for=rate" + i.value + "]";
      // console.log(rateNum);
      let optBtn = document.querySelector(rateNum);
      // console.log(optBtn);
      optBtn.style.backgroundColor = "var(--darkGreen)";
      let sib = getSiblings(optBtn);
      // console.log(sib);
      for (let i in sib) {
        // console.log(sib[i]);
        sib[i].style.backgroundColor = "var(--mediumGrey)";
      }
      submitBtn.disabled = false;
      submitBtn.classList.remove("disabled");
    });
  }
//   submit button control

  let userValue = document.querySelector(".userValue");
  let submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function () {
    event.preventDefault();
    console.log(document.querySelector("input[name=rate]:checked"));
    
    let formInput = document.getElementById("rating");
    let formData = new FormData(formInput);
    userValue.innerHTML = formData.get("rate");
    let pop = document.getElementById("thankYou");
    pop.style.display = "block";
    rating.style.display = "none";
  });

  let optcheck = document.querySelector("input[name=rate]:checked");
if(optcheck===null){
    submitBtn.classList.add("disabled");
}