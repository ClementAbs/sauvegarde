/*
@title - Calculator
@author - Clement
@date -06/06/2016
*/

//Variable
var testVariable=prompt("Entrer une valeur");
var testVariable1=prompt("Entrer une deuxieme valeur")

var selectionOpe=prompt("Selectionner une operation add sub mult div ou mod")

var ope="add"
var mult="mult"
var div="div"

if(selectionOpe=="add"){

var testVariable2=parseFloat(testVariable)+parseFloat(testVariable1);
alert(testVariable2);
}

else if(selectionOpe=="sub"){

var testVariable2=parseFloat(testVariable)-parseFloat(testVariable1);
alert(testVariable2);
}

else if(selectionOpe=="mult"){

var testVariable2=testVariable*testVariable1;
alert(testVariable2);
}

else if(selectionOpe=="div"){

var testVariable2=testVariable/testVariable1;
alert(testVariable2);
}

else if(selectionOpe=="mod"){

var testVariable2=testVariable%testVariable1;
alert(testVariable2);
}

else{

alert("Fin du calcul");

}


//Fonction

//Script Body
//console.log(textPoec);



