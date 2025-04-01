let SorS = document.querySelector(".SorS");
console.log(SorS);
let RorS = document.querySelector(".RorS");
console.log(RorS);
let check = document.querySelector(".check");
console.log(check);
let result= document.querySelector(".result");



check.onclick = function(){
    console.log("does it work");

    let SorS= SorS.value; 
console.log(SorS)

    let RorS= RorSA.value;
    console.log(RorS)

    if (SorS === "Sweet" && RorS === "Rainy")
        console.log ("Moon Dong-eun")
    result.innerHTML= "You are Moon Dong-eun"
};

else if (SorS === "Sour" && RorS=== "Rainy"){
    console.log ("Jeon Jae-joon")
result.innerHTML= "You are Jeon Jae-joon"
};
else if (SorS === "Sweet" && RorS === "Sunny"){
    console.log ("Ha Do-yeong")
result.innerHTML= "You are Ha Do-yeong"
};
else if (SorS === "Sour" && RorS === "Sunny "){
    console.log ("Park Yeon-jin")
result.innerHTML= "You are Park Yeon-jin"
};

