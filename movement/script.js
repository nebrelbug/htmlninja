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
			
			// Left arrow key pressed
			if(key===37) {
				keyArray[37] = true;
			}
	    		if(key!==37) {
				keyArray[37] = true;
			}
			if(key===38) {
				keyArray[38] = true;
			}
			if(key!==37) {
				keyArray[38] = true;
			}
			if(key===39) {
				keyArray[39] = true;
			}
			if(key!==37) {
				keyArray[39] = true;
			}
			if(key===40) {
				keyArray[40] = true;
			}
			if(key!==37) {
				keyArray[40] = true;
			}
	    movement();




	});
});
