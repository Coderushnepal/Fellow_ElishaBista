// Ques.3
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] 
let obj=
{
     a: 1,
      b: 2  
} 
let arr =Object.entries(obj);

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
let js =
{
    shrimp: 15, tots: 12  
}

 let arr1 =Object.entries(js);

//  toArray({}) ➞ []
let empty ={};
let arr2 =Object.entries(empty);



// Question 5
let keysAndValues=
{
    a: "Apple", b: "Microsoft", c: "Google"
}

let keys = Object.keys(keysAndValues);
console.log('Keys',keys)
 let value =Object.values(keysAndValues)
 console.log('Value',value)
  

// Part b.

 keysAndValues =
{
    a: 1,b: 2, c: 3 
}
let elsa= Object.keys(keysAndValues);
console.log('Keys',elsa)

let bista =Object.values(keysAndValues);
console.log('Value',bista)




// Ques.1
//  Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * *
// *

// The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

function render(x){
    for(let i=x; i>0; i--){
      let j=i, str = "*", string = "";
      while(j>0){      
        string+=str;
        j--;
      }
      console.log(string);
    }
  }
  render(5);

  

  
  
//   censor("The code is fourty") ➞ "The code is ******"
// censor("Two plus three is five") ➞ "Two plus ***** is five"
// censor("aaaa aalet str=("The code is fourty")let str=("The code is fourty")
 function repeatNo(str){
     if(str>4){
         console.log('*');
     }
     else
     {
         console.log('word')
     }
 }
 var repeat= repeatNo("The code is fourty");

 let str=("The code is fourty") ;
 let n;
 function  repeatStr(n,str){
if(n>4){
    console.log('*');
}
else{

}
 } 
 repeatStr(4,"The code is fourty");