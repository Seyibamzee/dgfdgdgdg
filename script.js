let sweetorSour = document.querySelector(".sweetorSour");
console.log(sweetorSour);
let rainyorSunny = document.querySelector(".rainyorSunny");
console.log(rainyorSunny);
let check = document.querySelector(".check");
console.log(check);

check.onclick = function(){
    console.log("does it work");
    let answerSweetorSour=sweetorSour.value;
    console.log( answerSweetorSour);
};
