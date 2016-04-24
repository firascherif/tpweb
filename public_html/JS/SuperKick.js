$(document).ready(function(){
    var stades = JSON.parse(localStorage.getItem("Stades"));
   var booleanStade1=false;
   var stade;
    for(var i =0; i< stades.length;i++){
        if(stades[i].name == "SuperKick"){
            
            stade = stades[i];
            booleanStade1 = true;
        }
    }
        if(booleanStade1 == true) {         
             $("#capaciteSuper").text(stade.capacite + " esp");
            $("#accesSuper").text(stade.acces);
            $("#hauteurSuper").text(stade.hauteur + " m");
            $("#largeurSuper").text(stade.largeur + " m");
            $("#adresseSuper").text(stade.adresse);
            $("#infoSuper").text(stade.info);
            $("#anneeSuper").text(stade.mois);
            
            $("#moisSuper").text(stade.annee);
            
           
        } 
        else
         alerte();
    });
    
function alerte(){
    alert("Les informations de ce stade ne sont pas disponible");
    window.close();
}