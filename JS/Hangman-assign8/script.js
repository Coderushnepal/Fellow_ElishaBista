//For title
var title=document.createElement("div");
title.style.textAlign="center";
title.classList="title";
title.style.position="absolute";
title.style.color="#fff";
// title.style.margin="-230px";
document.body.appendChild(title);
//For heading
var heading=document.createElement("h1");
heading.innerHTML="HangMan"
title.appendChild(heading);
//For subtitle
var subtitle=document.createElement("p");
subtitle.innerHTML="Find the hidden word-Enter a letter";
title.appendChild(subtitle);


var words=["January","Sunday","Mango","Rainy","Hello","CSIT","Science","Winter","Corona","Nepal","Elisha","Neha"];
 var splitWords= words[Math.floor(Math.random() * words.length)];
//  console.log(splitWords);
//For each words...creating a dash section.
 for(var i=0;i<splitWords.length;i++){
    var dash=document.createElement("span");
    dash.style.borderBottom="5px solid #fff";
    dash.style.width="30px";
    dash.classList="dashWord";
    dash.id="dash";
    dash.style.height="50px";
    
    // dash.style.marginTop="100px";
  
    dash.style.display = "inline-block";
    dash.style.marginLeft="15px";
   box.appendChild(dash);
  

 }

//  var remainingLetters=word.length;
//  while(remainingLetters>0){
//     alert(dashWord.join(" "));
//  }
//  var guess=prompt("Guess a letter");
var letters = document.querySelectorAll('.dashWord');
document.body.addEventListener("keydown",function(e){

   // if(e.target.id=="dash")

   for(var j=0;j<splitWords.length;j++){
      if(splitWords[j]===e.key){
         letters[j].innerHTML=e.key;
      }
      else{

      }
   }
   // if(guess==null){
   //    break;
   // }
   // else if(guess.length!==1){
   //    alert("please Enter a single letter");
   // }
   // else{
   //    for(var j=0;j<splitWords.length;j++){
   //       //If the letter player guess is in the word at that point or index
   //       if(splitWords[j]===guess){
   //          dashWord[j]=guess;
   //         //Substracts one letter form the remaining letter
   //         remainingLetters--; 
   //       }
   //    }
   // }
   
});
