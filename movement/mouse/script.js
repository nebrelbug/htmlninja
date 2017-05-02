var directions = [0,0,0,0];
var playing = 1;
var xv = 0;
var yv = 0;

	function mouseAction () {
    if (directions[2]) { //this checks if up arrow is pressed
        yv = yv - 1;
    }
    if (directions[4]) {
        yv = yv + 1;
    }
    if (directions[1]) {
        xv = xv - 1;
    }
    if (directions[3]) {
        xv = xv + 1;
    }
}
	function movement() {
    mouseAction();
    $('#character').css('left', '+=' + xv + 'px');
    $('#character').css('top', '+=' + yv + 'px');	
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
	}

$(document).ready(function() {
$( document ).on( "mousemove", function( event ) {
  if(event.pageX<xv) {
	  directions[1]=true;
	  directions[3]=false;
  } if(event.pageX>xv) {
	  directions[3]=true;
	  directions[1]=false;
  }if(event.pageY>yv) {
	  directions[2]=true;
	  directions[4]=false;
  }if(event.pageY<yv) {
	  directions[4]=true;
	  directions[2]=false;
  }
movement();
	$('#directions').html(directions);
});
});
