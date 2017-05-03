var directions = [0,0,0,0];
var playing = 1;
var xv = 0;
var yv = 0;

	function mouseAction () {
    if (directions[2]) { //this checks if up arrow is pressed
        yv = yv - 0.5;
    }
    if (directions[4]) {
        yv = yv + 0.5;
    }
    if (directions[1]) {
        xv = xv - 0.5;
    }
    if (directions[3]) {
        xv = xv + 0.5;
    }
}
	function movement() {
    mouseAction();
    /*$('#character').css('left', '+=' + xv + 'px');
    $('#character').css('top', '+=' + yv + 'px');*/
    $( "#character" ).offset({ top: +=yv, left: +=xv });
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
	}

$(document).ready(function() {
$( document ).on( "mouseover", function( event ) {
	var coordinate = $("#character").offset();
	var xCoordinate = coordinate.left;
	var yCoordinate = coordinate.top;
	
  if(event.pageX<xCoordinate) {
	  directions[1]=true;
	  directions[3]=false;
  } if(event.pageX>xCoordinate) {
	  directions[3]=true;
	  directions[1]=false;
  }if(event.pageY>yCoordinate) {
	  directions[4]=true;
	  directions[2]=false;
  }if(event.pageY<yCoordinate) {
	  directions[2]=true;
	  directions[4]=false;
  }
movement();
	$('#directions').html(directions);
	$('#coordinates').html(event.pageX + ',' + event.pageY);
});
});
