let SorS = document.querySelector(".SorS");
console.log(SorS);
let RorS = document.querySelector(".RorS");
console.log(RorS);
let check = document.querySelector(".check");
console.log(check);
let result= document.querySelector(".result");



check.onclick = function(){
    console.log("does it work");

    let SorSA= SorS.value; 
console.log(SorSA);

    let RorSA= RorS.value;
    console.log(RorSA);

    if (SorSA === "Sweet" && RorSA === "Rainy"){
        console.log ("Moon Dong-eun")
    result.innerHTML= "You are Moon Dong-eun";

}else if (SorSA === "Sour" && RorSA === "Rainy"){
    console.log ("Jeon Jae-joon")
result.innerHTML= "You are Jeon Jae-joon";

}else if (SorSA === "Sweet" && RorSA === "Sunny"){
    console.log ("Ha Do-yeong")
result.innerHTML= "You are Ha Do-yeong";

}else if (SorSA === "Sour" && RorSA === "Sunny"){
    console.log ("Park Yeon-jin")
result.innerHTML= "You are Park Yeon-jin"
};
}


