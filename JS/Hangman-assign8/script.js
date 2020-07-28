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
//wrong  letters display
var wrongDiv=document.createElement("div");
wrongDiv.classList.add("wrongDiv");
wrongDiv.style.position="absolute";
wrongDiv.style.top="500px";
document.body.appendChild(wrongDiv);
var wrongTitle = document.createElement('h2');
wrongTitle.classList.add('wrongTitle');
wrongTitle.innerHTML = 'Wrong Letters';
wrongTitle.style.color = 'white';
wrongTitle.style.fontWeight= 'bold';
wrongTitle.style.position= 'absolute';
wrongTitle.style.top= '450px';
wrongTitle.style.left= '900px';

wrongDiv.appendChild(wrongTitle);





 for(var i=0;i<splitWords.length;i++){
    var dash=document.createElement("span");
    dash.style.borderBottom="5px solid #fff";
    dash.style.width="30px";
    dash.classList="dashWord";
    dash.id="dash";
    dash.style.height="25px";
    
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
   if (splitWords.includes(e.key)){
   // if(e.target.id=="dash")

   for(var j=0;j<splitWords.length;j++){
      if(splitWords[j]===e.key){
         letters[j].innerHTML=e.key;

        
      }
   }
  

    }  
      else{
         var wrongLetterSpan = document.createElement('span');
         wrongLetterSpan.classList.add('wrongLetterSpan')
         wrongLetterSpan.innerHTML = e.key;
         wrongDiv.appendChild(wrongLetterSpan);
         // wrongLetterSpan.style.position= 'absolute';
         // wrongLetterSpan.style.top= '470px';
         // wrongLetterSpan.style.left= '800px';
         // wrongLetterSpan.style.marginLeft= '5px';
      }
  
   
 
   
});

