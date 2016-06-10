	/*
	@title - Calculator
	@author - Clement
	@date -06/06/2016
	*/

	//Variable
	/**Rechercher une énigme **/




$("#mario").fadeOut("fast").fadeIn(1000);

$( "#mario" ).animate({ "left": "+=1000px" },"fast");          


$( "#mario" ).animate({ "top": "+=1200px" },"fast");   




$( "#mario" ).animate({ "top": "-=50px" },"fast"); 


$( "#mario" ).animate({ "top": "+=50px" },"fast");

$( "#mario" ).animate({ "top": "-=50px" },"fast");

$( "#mario" ).animate({ "top": "+=50px" },"fast");



$( "#right" ).click(function() {
  $( "#mario" ).animate({ "left": "+=300px" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( "#mario" ).animate({ "left": "-=300px" }, "fast" );
});

$( "#down" ).click(function(){
  $( "#mario" ).animate({ "top": "+=300px" }, "fast" );
});

$( "#up" ).click(function(){
  $( "#mario" ).animate({ "top": "-=300px" }, "fast" );
});





    $(function(){
        $("#contact").submit(function(event){
            var nom        = $("#nom").val();
            var sujet      = $("#sujet").val();
            var email      = $("#email").val();
            var message    = $("#message").val();
            var dataString = nom + sujet + email + message;
            var msg_all    = "Merci de remplir tous les champs";
            var msg_alert  = "Merci de remplir ce champs";

            if (dataString  == "") {
                $("#msg_all").html(msg_all);
            } else if (nom == "") {
                $("#msg_nom").html(msg_alert);
            } else if (sujet == "") {
                $("#msg_sujet").html(msg_alert);
            } else if (email == "") {
                $("#msg_email").html(msg_alert);
            } else if (message == "") {
                $("#msg_message").html(msg_alert);
            } else {
                $.ajax({
                    type : "POST",
                    url: $(this).attr("action"),
                    data: $(this).serialize(),
                    success : function() {
                        $("#contact").html("<p>Formulaire bien envoyé</p>");
                    },
                    error: function() {
                        $("#contact").html("<p>Erreur d'appel, le formulaire ne peut pas fonctionner</p>");
                    }
                });
            }

            return false;
        });
    });


window.onkeydown = function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 37:
         $( "#mario" ).animate({ "left": "-=50px" },"fast");
        //-Move left
        break;
    case 39:
       $( "#mario" ).animate({ "left": "+=50px" },"fast");//-Move right
        break;
    case 38:
         $( "#mario" ).animate({ "top": "-=50px" },"fast");

         //-Move up
        break;
    case 40:
         $( "#mario" ).animate({ "top": "+=50px" },"fast");//-Move down
        break;

    case 32:

        $( "#mario" ).animate({ "top": "-=50px" },"fast"); 
        $( "#mario" ).animate({ "top": "+=50px" },"fast");

    default:
        break;
    }
};
