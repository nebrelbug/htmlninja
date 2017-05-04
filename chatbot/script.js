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
    $('#button').click(function() {
        input = $('input[name=checkListItem]').val();
        getResponse();
        $('.list').append('<div class="item">' + output + '</div>');
    });
});
