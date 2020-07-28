var figureParts=document.getElementsByClassName("figure-part");
var k=0;
function  displayFigureParts(){
   
    figureParts[k].style.visibility="visible";
    k++;
}
function won(){
    if( letters[j]===0){
        alert("you won the game");
    }
}

function displayAlreadyGuessed(letter){

}