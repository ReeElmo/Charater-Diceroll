const d4 = document.querySelector('#diceOne');
const d8 = document.querySelector('#diceTwo');
const d10 = document.querySelector('#diceThree');
const d20 = document.querySelector('#diceFour');

function rolld4(){
   var d4Result = Math.floor(Math.random()*4)+1;
    d4.innerText = d4Result
}

function rolld8(){
    var d8Result = Math.floor(Math.random()*8)+1;
     d8.innerText = d8Result
 }

 function rolld10(){
    var d10Result = Math.floor(Math.random()*10)+1;
     d10.innerText = d10Result
 }

 function rolld20(){
    var d20Result = Math.floor(Math.random()*20)+1;
     d20.innerText = d20Result
 }