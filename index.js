var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomImage2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 WINS!";
}

else if(randomNumber2>randomNumber1){
    document.querySelectorAll("h1")[0].innerHTML="Player 2 WINS!";
}

else{
    document.querySelectorAll("h1")[0].innerHTML="It is a DRAW!";
}