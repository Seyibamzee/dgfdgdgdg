let SorS = document.querySelector(".SorS");

let RorS = document.querySelector(".RorS");

let check = document.querySelector(".check");

let result= document.querySelector(".result");
let answer= document.querySelector(".answer");



 let MoonDongeun = document.querySelector(".MoonDongeun")
 let JeonJaejoon = document.querySelector(".JeonJaejoon")
 let HaDoyeong = document.querySelector(".HaDoyeong")
 let ParkYeonjin = document.querySelector(".ParkYeonjin")



check.onclick = function(){
    console.log("does it work");

    let SorSA= SorS.value; 
console.log(SorSA);

    let RorSA= RorS.value;
    console.log(RorSA);

    if (SorSA === "Sweet" && RorSA === "Rainy"){
        console.log ("Moon Dong-eun")
        result.innerHTML="You are Moon Dong-eun"
    answer.src="moon.jpg"
      

}else if (SorSA === "Sour" && RorSA === "Rainy"){
    console.log ("Jeon Jae-joon")
result.innerHTML= "You are Jeon Jae-joon"
answer.src="jeon.jpg"



}else if (SorSA === "Sweet" && RorSA === "Sunny"){
    console.log ("Ha Do-yeong")
result.innerHTML= "You are Ha Do-yeong"
answer.src="hado.jpg"

}else if (SorSA === "Sour" && RorSA === "Sunny"){
    console.log ("Park Yeon-jin")
result.innerHTML= "You are Park Yeon-jin"
answer.src="park.webp"
}
}



