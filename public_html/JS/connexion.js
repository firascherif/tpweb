$( document ).ready(function() {
  $("#loginform").submit(function(){
      var username =  $("#usr").val();
      var password =  $("#pword").val();
      var login = localStorage.getItem("logins");
      var present = false;
      
      if(username == "admin" && password =="Inf2005")
      {
        for(var i = 0; i < login.length; i++){
           if(login[i][0] == username && login[i][1] == password){
               return true;
           }
        }
      }
      else
      {
        alert("Login echoue, verifier votre login et mot de passe");
        return false;
      }
      
      
  
    });
});

