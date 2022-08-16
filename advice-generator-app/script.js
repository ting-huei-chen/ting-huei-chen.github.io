const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const btn = document.getElementById("dice");

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        adviceId.innerHTML =data.slip.id;
        advice.innerHTML =data.slip.advice;
    });
}
getAdvice();
btn.addEventListener("click",getAdvice);