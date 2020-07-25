function validateForm(){
    var pwd=document.getElementById("password");
    const errorPass = document.getElementById("passwordError");
    const fname = document.getElementById("fname"); 
    const userError= document.getElementById("userError");    
    
    // var email=document.getElementById("email");
    // var emailConfirm=document.getElementById("emailConfirm");
  
    const passConfirm=document.getElementById("pwdConfirm");
    const error=document.getElementById("errorMess");
    function username(){
            if(fname.value==""||fname.value.length<3){       
                userError.style.visibility="visible"; 
               
            }
            else {
                userError.style.visibility="hidden";           
                
            }
        }
    


          
    // function email(){
    //     if(email.value.length<6){
    //         emailError.style.visibility="visible";     
    //     }
    //     else{
    //         emailError.style.visibility="hidden";
    //     }
    // }
    function password(){
        if(pwd.value.length<6){
            errorPass.style.visibility="visible";     
        }
        else{
            errorPass.style.visibility="hidden";
        }
    }
    function confirmPassword(){
        if(passConfirm.value==pwd.value){ 
           
            error.style.visibility="visible";   
                  }     
                  
    else{error.style.visibility="hidden";        }    
    }

    username();
    password();
};