	/*
	@title - Calculator
	@author - Clement
	@date -06/06/2016
	*/

	//Variable
	/**Rechercher une énigme **/

	var vies=9;

	while(vies>0)
	{
		alert("Quelle l'annee de la revolution francaise?")
		if(vies>1){alert("Vous avez "+ vies+" vies");}	
		var rep=prompt("Entrer une reponse");

		if(rep=="1789")
			{alert("Vous avez gagne!");
			 vies=9;
	}

		else {vies=vies-1;}

	if(vies<4 && vies!=0 && vies!=1)
	alert("Attention plus que "+ vies+" vies");

	if(vies==1)
	{
		alert("Attention plus que "+ vies+" vie");
	}
	if(vies==0)
	{

		alert("Vous etes pendu! :/");
	}
}





	//Fonction

	//Script Body
	//console.log(textPoec);



