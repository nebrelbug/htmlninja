$(document).ready(function() {
	var xpos = 0;
	var ypos = 0;
	var xv = 0;
	var yv = 0;
	function keyTester () {
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
};
	function movement() {
    keyTester();
    xpos = xpos + xv; //setting the positions to the positions + movement
    ypos = ypos + yv;
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
    $('img').css('left', xpos+'px');
    $('img').css('top', ypos+'px');	
		
    $(document).keydown(function(key) {
	    movement();
};
        switch(parseInt(key.which,10)) {
			var keyArray = [];
			// Left arrow key pressed
			case 37:
				keyArray[37] = true;
				break;
			// Up Arrow Pressed
			case 38:
				keyArray[38] = true;
				break;
			// Right Arrow Pressed
			case 39:
				keyArray[39] = true;
				break;
			// Down Arrow Pressed
			case 40:
				keyArray[40] = true;
				break;
		}
	    




	});
});
