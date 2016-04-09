
function validateForm() {
    var un = document.getElementById("usr").value;
    var pw = document.getElementById("pword").value;
    var username = "admin";
    var password = "admin";
    if ((un === username) && (pw === password)) {
        window.location = "infoStade.html";
    } else {
        alert("Login was unsuccessful, please check your username and password");
    }
}
