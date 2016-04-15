$( window ).load(function(){
var admin= ["admin","Inf2005"];
var utilisateurs = JSON.parse(localStorage.getItem("logins"));
var estPresent = false;
if(utilisateurs == null){
    utilisateurs = [];
}
 if(utilisateurs != []){
     for(var i = 0; i < utilisateurs.length; i ++){
         if(utilisateurs[i][0] == admin[0] && utilisateurs[i][1] == admin[1]){
             estPresent = true;
         }
     }
}
if(!estPresent){
    utilisateurs.push(admin);
    localStorage.setItem("logins",utilisateurs);
}

});




