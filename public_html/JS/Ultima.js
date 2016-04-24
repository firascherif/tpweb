$(document).ready(function(){
    var stades = JSON.parse(localStorage.getItem("Stades"));
   var booleanStade1=false;
   var stade;
    for(var i =0; i< stades.length;i++){
        if(stades[i].name == "Ultima"){
            
            stade = stades[i];
            booleanStade1 = true;
        }
    }
        if(booleanStade1 == true) {         
            $("#capaciteUltima").text(stade.capacite + " esp");
            $("#accesUltima").text(stade.acces);
            $("#hauteurUltima").text(stade.hauteur + " m");
            $("#largeurUltima").text(stade.largeur + " m");
            $("#adresseUltima").text(stade.adresse);
            $("#infoUltima").text(stade.info);
            $("#moisUltima").text(stade.mois);
            $("#infoUltima").text(stade.annee);
            
           
        } 
        else
         alerte();
    });
    
function alerte(){
    alert("Les informations de ce stade ne sont pas disponible");
    window.close();
}