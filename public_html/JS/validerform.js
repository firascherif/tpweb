function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip');

    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.display = 'none';
    }

}


// La fonction ci-dessous permet de récupérer la "tooltip" 
// qui correspond à notre input

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }
    return false;
}

// Fonctions de vérification du formulaire, elles renvoient "true" 
// si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral


check['Name'] = function (id) {

    var name = document.getElementById(id);
    var tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['capacite'] = function () {

    var capacite = document.getElementById('capacite'),
            tooltipStyle = getTooltip(capacite).style,
            capaciteValue = parseInt(capacite.value);

    if (!isNaN(capaciteValue) && capaciteValue >= 50000 && capaciteValue <= 120000) {
        capacite.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        capacite.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};


check['acces'] = function () {

    var acces = document.getElementById('acces'),
            tooltipStyle = getTooltip(acces).style;

    if (acces.options[acces.selectedIndex].value != 'none') {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

};


check['hauteur'] = function () {

    var hauteur = document.getElementById('hauteur'),
            tooltipStyle = getTooltip(hauteur).style,
            hauteurValue = parseInt(hauteur.value);

    if (!isNaN(hauteurValue) && hauteurValue >= 0 && hauteurValue <= 300) {
        hauteur.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        hauteur.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['largeur'] = function () {

    var largeur = document.getElementById('largeur'),
            tooltipStyle = getTooltip(largeur).style,
            largeurValue = parseInt(largeur.value);

    if (!isNaN(largeurValue) && largeurValue >= 0 && largeurValue <= 300) {
        largeur.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        largeur.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['adresse'] = function (id) {

    var adresse = document.getElementById(id);
    var tooltipStyle = getTooltip(adresse).style;

    if (adresse.value.length >= 1) {
        adresse.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        adresse.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

(function () {

    var myForm = document.getElementById('myForm');
    var inputs = document.querySelectorAll(
            'input[type=text]');
    var select = document.getElementById('acces');

    select.addEventListener('change', function (e) {
        check[e.target.id]();
    }, false);

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            check[e.target.id](e.target.id); // "e.target" représente 
            // l'input actuellement modifié
        }, false);
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function (e) {
            check[e.target.name](); // "e.target" représente 
            // l'input actuellement modifié
        }, false);

    }
    ;

    myForm.addEventListener('submit', function (e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            window.location = "../navigation/stadeMaj.html";
        }

        e.preventDefault();

    }, false);

    myForm.addEventListener('reset', function () {

        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }

        deactivateTooltips();

    }, false);

})();

// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();

