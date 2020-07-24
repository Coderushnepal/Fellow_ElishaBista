function validateForm(){

    var username=document.getElementById("fname").Value;
    var pwd=document.getElementById("password").Value;
    function username(){
    if(username==""||username=="username.length<3"){
       
        error_message.style.display="block";
    }
    else {
        error_message.style.display="none"; 
    }
    }
    function password(){
        if(pwd<6||pwd==""){
            error_message.style.display="block";
        }
        else{
            error_message.style.display="none";  
        }
    }

}