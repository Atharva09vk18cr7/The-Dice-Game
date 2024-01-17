var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;

if(p1===1){
    document.querySelector(".player1").setAttribute("src","./images/dice1.png")
}
else if(p1 === 2){
    document.querySelector(".player1").setAttribute("src","./images/dice2.png");
}
else if(p1 === 3){
    document.querySelector(".player1").setAttribute("src","./images/dice3.png");
}
else if(p1 === 4){
    document.querySelector(".player1").setAttribute("src","./images/dice4.png");
}
else if(p1 === 5){
    document.querySelector(".player1").setAttribute("src","./images/dice5.png");
}
else if(p1 === 6){
    document.querySelector(".player1").setAttribute("src","./images/dice6.png");
}

if(p2===1){
    document.querySelector(".player2").setAttribute("src","./images/dice1.png")
}
else if(p2 === 2){
    document.querySelector(".player2").setAttribute("src","./images/dice2.png");
}
else if(p2 === 3){
    document.querySelector(".player2").setAttribute("src","./images/dice3.png");
}
else if(p2 === 4){
    document.querySelector(".player2").setAttribute("src","./images/dice4.png");
}
else if(p2 === 5){
    document.querySelector(".player2").setAttribute("src","./images/dice5.png");
}
else if(p2 === 6){
    document.querySelector(".player2").setAttribute("src","./images/dice6.png");
}

if(p1 === p2){
    document.querySelector("h2").innerHTML= "Draw";
    document.querySelector(".p1").classList.add("winner");
    document.querySelector(".p2").classList.add("winner");
}
else if(p1 > p2){
    document.querySelector("h2").innerHTML="🚩Player 1 Wins";
    document.querySelector(".p1").classList.add("winner");
}
else if(p1 < p2){
    document.querySelector("h2").innerHTML="Player 2 Wins🚩";
    document.querySelector(".p2").classList.add("winner");
}
function load(){
    window.location.reload(true);
}
document.querySelector(".btn").addEventListener("click",load);