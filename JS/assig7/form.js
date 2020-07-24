function form(){
    var x=document.getElementById("form");
    var createform=document.createElement("form");//Creating the new element form
    createform.setAttribute("action","");
    createform.setAttribute("name","myForm");
    createform.setAttribute("method","post");
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
      inputelement.setAttribute("id","uname");
      inputelement.setAttribute("name","name");
      inputelement.setAttribute("placeholder","Enter Username");
      
      
      createform.appendChild(inputelement);
      


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
      passwordelement.setAttribute("name","password");
      passwordelement.setAttribute("placeholder","Enter Password");
      createform.appendChild(passwordelement);


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


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);


      var linebreak=document.createElement('br');
      createform.appendChild(linebreak);

      var submit=document.createElement("input");
      submit.setAttribute("type","submit");
      submit.setAttribute("name","submit");
      submit.setAttribute("value","submit");
      var onsubmit=addEventListener("click",function(){
          return validateemail();
      })
      createform.appendChild(submit);
    }
    form();



























   

