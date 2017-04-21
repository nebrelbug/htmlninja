var input = "not yet";
var output = 0;
function getResponse {
    if (input === "not yet") {
        output = "Say something!";
        if (input === "hi") {
            output = "Hola!";
        }
}


$(document).ready(function() {
    $('#button').click(function() {
        var input = $('input[name=checkListItem]').val();
        getResponse();
        $('.list').append(output);
    });
});
