	/*
	@title - Calculator
	@author - Clement
	@date -06/06/2016
	*/

	//Variable
	/**Rechercher une énigme **/

function showme(event){

	alert("Premier Menu");
	
}


function showme2(event){

	alert("Deuxième Menu");
	
}

function showme3(event){

	alert("Troisième Menu");
}


var ecouteur1=document.getElementById("menu1")
ecouteur1.addEventListener("click",showme);
	

var ecouteur2=document.getElementById("menu2")	
ecouteur2.addEventListener("click",showme2);


var ecouteur3=document.getElementById("menu3")
ecouteur3.addEventListener("click",showme3);

//console.log();



