$(document).ready(function(){
    var stades = JSON.parse(localStorage.getItem("Stades"));
   var booleanStade1=false;
   var stade;
    for(var i =0; i< stades.length;i++){
        if(stades[i].name == "SaltMountain"){
            
            stade = stades[i];
            booleanStade1 = true;
        }
    }
        if(booleanStade1 == true) {         
            $("#capaciteSalt").text(stade.capacite + " esp");
            $("#accesSalt").text(stade.acces);
            $("#hauteurSalt").text(stade.hauteur + " m");
            $("#largeurSalt").text(stade.largeur + " m");
            $("#adresseSalt").text(stade.adresse);
            $("#infoSalt").text(stade.info);
            $("#anneeSalt").text(stade.mois);
            $("#moisSalt").text(stade.annee);
            
            
           
        } 
        else
         alerte();
    });
    
function alerte(){
    alert("Les informations de ce stade ne sont pas disponible");
    window.close();
}