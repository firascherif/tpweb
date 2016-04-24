$(document).ready(function(){
  var stades = JSON.parse(localStorage.getItem("Stades"));
  
   var table = $("#tablestade"); 
    var body = $("<tbody>"); 
     var tr ;
  for(var i =0; i< stades.length;i++){

    tr = $("<tr>");       
    tr.append("<td>"+stades[i].name + "</td>");
    tr.append("<td>"+stades[i].annee+ "</td>");
      body.append(tr);
  }
  table.append(body);
   table.DataTable();
});
        
        
        
        
        
        