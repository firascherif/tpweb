$( document ).ready(function(){
    $("#myForm").submit(function(){
        var name = $("#Name").val();
        var capacite = $("#capacite").val();
        var acces = $("#acces").val();
        var hauteur = $("#hauteur").val();
        var largeur = $("#largeur").val();
        var adresse = $("#adresse").val();
        var info = $("#informations").val();
        var date = $("#date").val();
     
    
    var stades = [name,capacite,acces,hauteur,largeur,adresse,info,date];
    var stadesS = JSON.parse(localStorage.getItem("Stades"));
    if(stadesS == null){
        stadesS = [];
        
    }
    if(stadesS != []){
        for(var i = 0; i < stadesS.length; i ++){
            if(stadesS[i][0] == stades[0]){
                 stadesS[i][1] = capacite;
                 stadesS[i][2] = acces;
                 stadesS[i][3] = hauteur;
                 stadesS[i][4] = largeur;
                 stadesS[i][5] = adresse;
                 stadesS[i][6] = info;
                 
            }

                
            }
           
        }
        stadesS.push(stade);
    localStorage.setItem("stades",stadesS);
       
    })
    
    })
    
   
    


    





