function validateForm(){
    var pwd=document.getElementById("password");
    const errorPass = document.getElementById("passwordError");
    const fname = document.getElementById("fname"); 
    const userError= document.getElementById("userError");    
//     const email=document.getElementById("email");
//    const emailError=document.getElementById("emailError");
    const passConfirm=document.getElementById("pwdConfirm");
    const error=document.getElementById("errorMess");
    function username(){
            if(fname.value==""||fname.value.length<3){       
                userError.style.visibility="visible"; 
                fname.style.border="2px solid red";
                   fname.style.borderRadius="5px";
               
            }
            else {
                userError.style.visibility="hidden"; 
                  fname.style.border="2px solid green";
                    fname.style.borderRadius="5px";          
                
            }
        }
    //  function email(){
    //      if(email.value==""){
    //         emailError.style.visibility="visible"; 
    //      }
    //      else{
    //           emailError.style.visibility="none"; 
    //      }
    //  }

    function password(){
        if(pwd.value.length<6){
            errorPass.style.visibility="visible";  
             pwd.style.border="2px solid red";
                   pwd.style.borderRadius="5px";   
        }
        else{
            errorPass.style.visibility="hidden";
              pwd.style.border="2px solid green";
                   pwd.style.borderRadius="5px";   
        }
    }
    function confirmPassword(){
        if(passConfirm.value==pwd.value){ 
           
            error.style.visibility="hidden";  
             passConfirm.style.border="2px solid green";
                  passConfirm.style.borderRadius="5px";    
                  }     
                  
    else{error.style.visibility="visible"; 
      passConfirm.style.border="2px solid red";
     passConfirm.style.borderRadius="5px";          }    
    }

    username();
    password();
    // email();
    confirmPassword();
};