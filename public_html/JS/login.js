 function validateForm() {
                var un = document.getElementById("usr").value;
                var pw = document.getElementById("pword").value;
                if (un == "admin" && pw == "INF2005")
                    return true;
                else                   
                    alert("Login echoue, verifier votre login et mot de passe");
                    return false;
            }
