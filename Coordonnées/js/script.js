	/*
	@title - Calculator
	@author - Clement
	@date -06/06/2016
	*/

	//Variable
	/**Rechercher une énigme **/

function showme(event){

	var coordonneeX=event.clientX;
	var coordonneeY=event.clientY;
	document.getElementById("contenu").innerHTML="Coordonnée X"+ coordonneeX +"Coordonnée Y"+ coordonneeY;

	console.log(coordonneeX);
	console.log(coordonneeY);

}

document.body.addEventListener("mouseover",showme);
	






