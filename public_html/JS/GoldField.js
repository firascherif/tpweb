$(document).ready(function () {
    var stades = JSON.parse(localStorage.getItem("Stades"));
    var booleanStade1 = false;
    var stade;
    for (var i = 0; i < stades.length; i++) {
        if (stades[i].name == "GoldField") {

            stade = stades[i];
            booleanStade1 = true;
        }
    }
    if (booleanStade1 == true) {
        $("#capaciteGoldField").text(stade.capacite + " esp");
        $("#accesGoldField").text(stade.acces);
        $("#hauteurGoldField").text(stade.hauteur + " m");
        $("#largeurGoldField").text(stade.largeur + " m");
        $("#adresseGoldField").text(stade.adresse);
        $("#anneeGoldField").text(stade.mois);
        $("#moisGoldField").text(stade.annee);
        $("#infoGoldField").text(stade.info);


    }
    else
        alerte();
});

function alerte() {
    alert("Les informations de ce stade ne sont pas disponible");
    window.close();
}