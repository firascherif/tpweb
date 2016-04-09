var bd=null;//simulation base de donnees avec localStorage et json
function ajoutInfo()
{
	var section=$('input[name="section"]:first').val();
	var desc=$('textarea[name="description"]:first').val();
	
	lireBdJson();
	var descJsonObjects=bd.descriptions;
	var jsonObject={ //creation de json
		"section":section,
		 "description":desc
	};
	
	descJsonObjects.push(jsonObject);//ajout dans le tableau des description
	bd.descriptions=descJsonObjects;
	localStorage.setItem('bdjson', JSON.stringify(bd));	
	return(true);	
}

function initialiserBdJson()
{
	var bdjson={
		"descriptions":[]
   	};	
	
	localStorage.setItem('bdjson', JSON.stringify(bdjson));	
	bd=bdjson;
}

function lireBdJson()
{
	bd=localStorage.getItem('bdjson');
	if((bd=="undefined")||(bd==null))
	{//ici on doit initialiser la bd
		initialiserBdJson();
	}
	else
	{
		bd=JSON.parse(bd);//parsin de objet json
	}
	
	var descJsonObjects=bd.descriptions;
	var hr="<hr>";
	$("#contenu:first").append(hr);
	
	for(var i=0;i<descJsonObjects.length;i++)
	{
		var jsonObject=null;
		jsonObject=descJsonObjects[i];
		
		var div='<div class="ajoutjson">';
		    div=div+'<h3 class="section">'+jsonObject.section+'</h3>';
		    div=div+'<div class="description">'+jsonObject.description+'</div>';
		  	div=div+'</div>';
			$("#contenu:first").append(div);
	}
	$("#contenu:first").append(hr);
}

function mettreAJourBdJson()
{
	initialiserBdJson();
	var descJsonObjects=bd.descriptions;
	$('div[class="ajoutjson"]').each(function(){
		var section=$(this).find('h3[class="section"]:first').html();
		var desc=$(this).find('div[class="description"]:first').html();
		var jsonObject={ //creation de json
			"section":section,
			"description":desc
	    };
	    descJsonObjects.push(jsonObject);
	});
	
	bd.descriptions=descJsonObjects;
	localStorage.setItem('bdjson', JSON.stringify(bd));	
}

$(document).ready(function(){
	//localStorage.removeItem('bdjson'); //supression de la bd localStorage
	lireBdJson();
	$("#ajout").submit( function(event){
		return ajoutInfo();
	});
	
	$('h3[class="section"]').dblclick(function(){
		$(this).parent().remove();
		mettreAJourBdJson();
	});
});