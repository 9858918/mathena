$(document).ready(function() {
	//javascript functions go here
	var ctx  = $("#thecanvas")[0].getContext("2d");
	ctx.fillStyle = "#0011FF";
	ctx.fillRect(0,0,100,100);
	
	$("#thecanvas")[0].height = 100;
});
