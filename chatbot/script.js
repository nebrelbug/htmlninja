var input = "not yet";
var output = 0;
function getResponse() {
    if (input === "not yet") {
        response = "Say something!";
        if (input === "hi") {
            response = "Hola!";
        }
        output = $("<p>" + response + "</p>");
}


$(document).ready(function() {
    $('#button').click(function() {
        var input = $('input[name=checkListItem]').val();
        getResponse();
        $('.list').append(output);
    });
});
