var input = "not yet";
var output = 0;
function getResponse() {
    if (input === "not yet") {
        output = "Say something!";
    }if (input === "Hi") {
            output = "Hola!";
    }if (input === "How are you?") {
        output = "Good!";
    }
        //output = $("<p>" + response + "</p>");
}


$(document).ready(function() {
    $( "#checkListItem" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $( "#button").click();
  }
});
    $('#button').click(function() {
        input = $('input[name=checkListItem]').val();
        getResponse();
        $('.list').append('<div class="item">' + output + '</div>');
    });
});
