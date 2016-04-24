$(document).ready(function(){
    var stades = JSON.parse(localStorage.getItem("Stades"));
   var booleanStade1=false;
   var stade;
    for(var i =0; i< stades.length;i++){
        if(stades[i].name == "Olympique Richelieu"){
            
            stade = stades[i];
            booleanStade1 = true;
        }
    }
        if(booleanStade1 == true) {         
            $("#capaciteOly").text(stade.capacite + " esp");
            $("#accesOly").text(stade.acces);
            $("#hauteurOly").text(stade.hauteur + " m");
            $("#largeurOly").text(stade.largeur + " m");
            $("#adresseOly").text(stade.adresse);
            $("#anneeOly").text(stade.mois);
            $("#moisOly").text(stade.annee);
            $("#infoOly").text(stade.info);
            
           
        } 
        else
         alerte();
    });
    
function alerte(){
    alert("Les informations de ce stade ne sont pas disponible");
    window.close();
}