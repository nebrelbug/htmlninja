var keys = [];
var playing = 1;
var xv = 0;
	var yv = 0;
	function keyAction () {
    if (keys[38]) { //this checks if up arrow is pressed
        yv = yv - 1;
    }
    if (keys[40]) {
        yv = yv + 1;
    }
    if (keys[37]) {
        xv = xv - 1;
    }
    if (keys[39]) {
        xv = xv + 1;
    }
}
	function movement() {
    keyAction();
    $('#character').css('left', '+=' + xv + 'px');
    $('#character').css('top', '+=' + yv + 'px');	
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
	}

$(document).ready(function() {


$(document).keydown(function (e) {
    keys[e.which] = true;
	keyAction();
	movement();
});

$(document).keyup(function (e) {
    delete keys[e.which];
    keyAction();
});
});
