$( window ).load(function(){
var admin ={"user":"admin","pass":"Inf2005"};
var utilisateurs = JSON.parse(localStorage.getItem("logins"));
var estPresent = false;
if(utilisateurs == null){
    utilisateurs = [];
}
 if(utilisateurs != []){
     for(var i = 0; i < utilisateurs.length; i ++){
         if(utilisateurs[i].user = admin.user  && utilisateurs[i].pass == admin.pass){
                estPresent = true;       
         }
     }
}
if(!estPresent){
   
    utilisateurs.push(admin);
    localStorage.setItem("logins",JSON.stringify(utilisateurs));
}  

});




