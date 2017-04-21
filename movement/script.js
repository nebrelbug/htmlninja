$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').css('left', '-=10px');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').css('top', '-=10px');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').css('left', '+=10px');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').css('top', '+=10px');
				break;
		}
	});
});
