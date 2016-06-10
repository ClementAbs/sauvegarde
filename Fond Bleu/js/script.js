	/*
	@title - Calculator
	@author - Clement
	@date -06/06/2016
	*/

	//Variable
	/**Rechercher une énigme **/

var changeBg = function(){

	this.style.background="blue";
}


//Script Body

var truc=document.getElementsByClassName("test");

for(var i=0; i<=truc.length;i++){

	truc[i].addEventListener("click",changeBg);
}



	//Fonction

		//console.log(textPoec);



