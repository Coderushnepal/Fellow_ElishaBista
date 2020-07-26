function validateForm(){
    var pwd=document.getElementById("password");
    const errorPass = document.getElementById("passwordError");
    const fname = document.getElementById("fname"); 
    const userError= document.getElementById("userError");    
    const emailValue=document.getElementById("email");
   const  errorEmail=document.getElementById("emailError");
    const passConfirm=document.getElementById("pwdConfirm");
    const error=document.getElementById("errorMess");
    function username(){
            if(fname.value==""||fname.value.length<3){       
                userError.style.display="block"; 
                fname.style.border="2px solid red";
                   fname.style.borderRadius="5px";
               
            }
            else {
                userError.style.display="none"; 
                  fname.style.border="2px solid green";
                    fname.style.borderRadius="5px";          
                
            }
        }
        // function emailValid(){
        //     if(emaill.value==""){
        //         emailErrorr.style.display="block";
        //         emaill.style.border="2px solid red";
        //            emaill.style.borderRadius="5px";  
        //     }
        //     else{
        //         emailErrorr.style.display="none";
        //         emaill.style.border="2px solid green";
        //            emaill.style.borderRadius="5px"; 
                 
        //     }
        // }


        if(emailValue === '') 

        {

                              

            errorEmail.style.visibility = "visible";
            emailValue.style.border="2px solid green";    
              

                

        }

        else if(!isEmail(emailValue)) {
           

            errorEmail.style.visibility = "visible";
            emailValue.style.borderRadius="5px";  
           
            emailValue.style.border="2px solid red";     

                

        }

        else 

        {
            // errorEmail.style.visibility = "hidden"; 
            // emailValue.style.border="2px solid green";    
                                    
            // emailValue.style.border="2px solid green"; 

                

        }

        function isEmail(email) 

        {

            return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);

        }


        
        
    
    function password(){
        if(pwd.value.length<6){
            errorPass.style.display="block";  
             pwd.style.border="2px solid red";
                   pwd.style.borderRadius="5px";   
        }
        else{
            errorPass.style.display="none";
              pwd.style.border="2px solid green";
                   pwd.style.borderRadius="5px";   
        }
    }
    function confirmPassword(){
        if(passConfirm.value==pwd.value && passConfirm.value!=""){ 
           
            error.style.display="none";  
                  passConfirm.style.borderRadius="5px"; 
                  passConfirm.style.border="2px solid green";   
                  }     
            
    else
    {error.style.display="block"; 
      passConfirm.style.border="2px solid red";
     passConfirm.style.borderRadius="5px";          }    
    }
   


    username();
    password();
    isEmail(emailValue);
    // emailValid();
    confirmPassword();
};