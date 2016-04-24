function validateForm() {
    var un = document.getElementById("usr").value;
    var pw = document.getElementById("pword").value;
    var connection = JSON.Parse(localStorage.getItem("logins"));
    if (un == "admin" && pw == "inf2005"){
        return true;
    }
    else
            alert("Login echoue, verifier votre login et mot de passe");
    return false;
}

    document.getElementById('stockage').onclick = function () {
        if (typeof localStorage != 'undefined' && JSON) {
            var coordonnees = {
                nom: document.getElementById('usr').value,
                pass: document.getElementById('pword').value,
            };
            localStorage.setItem('coord', JSON.stringify(coordonnees));
            window.location = "index.html"
        } else
            alert("localStorage n'est pas supporté");
    };
