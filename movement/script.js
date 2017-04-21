	var xv = 0;
	var yv = 0;
var keyArray = [];
	function keyTester () {
    if (keyArray[38]) { //this checks if up arrow is pressed
        yv = yv - 1;
    }
    if (keyArray[40]) {
        yv = yv + 1;
    }
    if (keyArray[37]) {
        xv = xv - 1;
    }
    if (keyArray[39]) {
        xv = xv + 1;
    }
}
	function movement() {
    keyTester();
    $('img').css('left', '+=' + xv + 'px');
    $('img').css('top', '+=' + yv + 'px');	
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
	}
		

$(document).ready(function() {

    $(document).keydown(function(key) {
	    
        switch(parseInt(key.which,10)) {
			
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
	    movement();




	});
});
