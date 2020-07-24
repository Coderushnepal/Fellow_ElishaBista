function form(){
    var x=document.getElementById("form");
    var createform=document.createElement("form");//Creating the new element form
    createform.setAttribute("action","");
    createform.setAttribute("name","myForm");
    createform.setAttribute("method","post");
    createform.setAttribute("onsubmit","return validatForm();");
    x.appendChild(createform);

    var heading=document.createElement('h1');//heading of form
    heading.innerHTML="Register with us";
    createform.appendChild(heading);

    var linebreak=document.createElement('br');
    createform.appendChild(linebreak);

   
    var namelabel=document.createElement('label');//Create label for name label
      namelabel.innerHTML="Username";
      createform.appendChild(namelabel);

      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var inputelement=document.createElement('input');
      inputelement.setAttribute("type","text");
      inputelement.setAttribute("id","fname");
      inputelement.setAttribute("name","name");
      inputelement.setAttribute("placeholder","Enter Username");
      
      
      createform.appendChild(inputelement);
      
      var error_message=document.createElement("p");
      error_message.innerHTML="Name is required and length>3";
      error_message.style.display="none";
      error_message.style.color="red";
     createform.appendChild(error_message);

      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);
      

      var emaillabel=document.createElement('label');
      emaillabel.innerHTML="Email";
      createform.appendChild(emaillabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var emailelement=document.createElement('input');
      emailelement.setAttribute("type","email");
      emailelement.setAttribute("name","email");
      emailelement.setAttribute("placeholder","Enter email");
      createform.appendChild(emailelement);


      var error_message=document.createElement("p");
      error_message.innerHTML="valid email is required";
      error_message.style.display="none";
      error_message.style.color="red";
     createform.appendChild(error_message);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var passwordlabel=document.createElement('label');
     passwordlabel.innerHTML="Password";
      createform.appendChild(passwordlabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var passwordelement=document.createElement('input');
     passwordelement.setAttribute("type","password");
     passwordelement.setAttribute("id","password");
      passwordelement.setAttribute("name","password");
      passwordelement.setAttribute("placeholder","Enter Password");
      createform.appendChild(passwordelement);

      var error_message=document.createElement("p");
      error_message.innerHTML="length>6 and is required";
      error_message.style.display="none";
      error_message.style.color="red";
     createform.appendChild(error_message);



      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var confirmpasswordlabel=document.createElement('label');
     confirmpasswordlabel.innerHTML="Confirm Password";
      createform.appendChild(confirmpasswordlabel);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var passwordelement=document.createElement('input');
     passwordelement.setAttribute("type","password");
      passwordelement.setAttribute("name","pwd");
      passwordelement.setAttribute("placeholder","Enter Password again");
      createform.appendChild(passwordelement);


      var error_message=document.createElement("p");
      error_message.innerHTML="Should be equal";
      error_message.style.display="none";
      error_message.style.color="red";
     createform.appendChild(error_message);



      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var submit=document.createElement("input");
      submit.setAttribute("type","submit");
      submit.setAttribute("name","submit");
      submit.setAttribute("value","submit");
      var onsubmit=addEventListener("click",function(){
          return validatForm();
      })
      createform.appendChild(submit);
    }
    form();



























   

