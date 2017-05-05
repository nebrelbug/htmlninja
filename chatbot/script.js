var input = "not yet";
var output = 0;
function getResponse() {
    if (input === "not yet") {
        output = "Say something!";
    }if (input === "hi") {
            output = "Hola!";
    }if (input === "How are you?") {
        output = "Good!";
    }if (input === "2+2") {
            output = "4";
    }if (input === "3*3") {
        output = "9";
    }if (input === "What's your favorite color?") {
            output = "Green!";
    }
        //output = $("<p>" + response + "</p>");
}


$(document).ready(function() {
    $( "#checkListItem" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $( "#submit").click();
  }
});
    $("#submit").click(function() {
        input = $("input[name=checkListItem]").val();
        getResponse();
        $(".list").append("<div class='item'>" + output + '</div>');
    });
});
