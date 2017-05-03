$(document).ready(function() {
	var coordinate = $("#character").offset();
	var xCoordinate = coordinate.left;
	var yCoordinate = coordinate.top;
	var directions = [0,0,0,0];
var playing = 1;
var xv = 0;
var yv = 0;

	function mouseAction () {
    if (directions[2]) { //this checks if up arrow is pressed
        yv = yv - 0.4;
    }
    if (directions[4]) {
        yv = yv + 0.4;
    }
    if (directions[1]) {
        xv = xv - 0.4;
    }
    if (directions[3]) {
        xv = xv + 0.4;
    }
}
	function movement() {
    mouseAction();
    /*$('#character').css('left', '+=' + xv + 'px');
    $('#character').css('top', '+=' + yv + 'px');*/
    xCoordinate+=xv;
    yCoordinate+=yv;
    $( "#character" ).offset({ top: yCoordinate, left: xCoordinate });
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
	}

	
$( document ).on( "mousemove", function( event ) {
	coordinate = $("#character").offset();	
  if(event.pageX<coordinate.left) {
	  directions[1]=true;
	  directions[3]=false;
  } if(event.pageX>coordinate.left) {
	  directions[3]=true;
	  directions[1]=false;
  }if(event.pageY>coordinate.top) {
	  directions[2]=true;
	  directions[4]=false;
  }if(event.pageY<coordinate.top) {
	  directions[4]=true;
	  directions[2]=false;
  }
movement();
	$('#directions').html(directions);
	$('#coordinates').html(event.pageX + ',' + event.pageY);
});
});
