$( document ).ready(function(){
    $("#myForm").submit(function(){
     
        var name = $("#listeStades").val();
        
        var capacite = $("#capacite").val();
        var acces = $("#acces ").val();
        var hauteur = $("#hauteur").val();
        var largeur = $("#largeur").val();
        var adresse = $("#adresse").val();
        var info = $("#informations").val();
        var annee = $("#annee").val();
        var mois= $("#mois").val();
    var stades = {"name":name ,"capacite":capacite,"acces":acces,"hauteur":hauteur,"largeur":largeur,"adresse":adresse,"info":info,"annee":annee,"mois":mois};
    var stadesS = JSON.parse(localStorage.getItem("Stades"));
    if(stadesS == null){
        stadesS = [];
        
    }     
    stadesS.push(stades);
    localStorage.setItem("Stades",JSON.stringify(stadesS));
       
    });
    
    });
    
   
    


    





