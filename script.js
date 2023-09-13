const totalMarks = document.querySelector(".score h1");
const summarySpans = document.querySelectorAll(".marks span:first-child");

window.addEventListener("DOMContentLoaded" , populate());

function populate(){
    let i = 0;
    let total=0;
    fetch("data.json")
    .then((response)=> response.json())
    .then((json)=>{
        for(const item of json){
            total += item.score;
            summarySpans[i++].textContent = item.score;
        }
        totalMarks.textContent = Math.floor(total/4);
    });
    
}