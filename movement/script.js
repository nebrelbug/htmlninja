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
/*function charMove() {
	    if (yv>1||xv>1) {
    while(yv>1||xv>1) {
	    movement();
    }
    }
}
	*/	

$(document).ready(function() {


$(document).keydown(function (e) {
    keys[e.which] = true;
	keyAction();
	
});

$(document).keyup(function (e) {
    delete keys[e.which];
    keyAction();
});

	while(playing===1) {
		keyAction();
		movement();
	if(yv>100) {
		playing = 0;
	}
	}
});
