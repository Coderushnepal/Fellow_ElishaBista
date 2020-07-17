function show(){
    var pwd=document.getElementById("pwd");
//    var icon=document.querySelector(".fa");
  
      if(pwd.type=="password"){
          pwd.type="text";
      }
      else{
        pwd.type="password";
      }
    
    };

//   const icon=document.querySelector(".fa");
//     console.log(icon);