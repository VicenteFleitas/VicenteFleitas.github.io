if(untangleGame === undefined)
{
	var untangleGame = {};
}

untangleGame.handleInput = function() 
{
	//add event listener to mouse event
	//set dragging circle func
	$("#game").bind("mousedown touchstart", function(e)
	{
		//desactivar el scroll
		e.preventDefault();
		//touch or mouse position
		var touch = e.originalEvent.touches && e.originalEvent.touches[0];
		var pageX = (touch||e).pageX;
		var pageY = (touch||e).pageY;

		var canvasPosition = $(this).offset();
		var mouseX = pageX - canvasPosition.left;
		var mouseY = pageY - canvasPosition.top;

		for (var i = 0; i < untangleGame.circles.length; i++) 
		{
			var circleX = untangleGame.circles[i].x;
			var circleY = untangleGame.circles[i].y;
			var radius = untangleGame.circles[i].radius;
			if(Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2) < Math.pow(radius, 2))
			{
				untangleGame.targetCircleIndex = i;
				break;
			}
		}
	});

	$("#game").bind("mousemove touchmove", function(e)
	{
		//disable deafaul drag scroll behavior
		e.preventDefault();
		//touch or mouse position
		var touch = e.originalEvent.touches && e.originalEvent.touches[0];
		var pageX = (touch||e).pageX;
		var pageY = (touch||e).pageY;

		if(untangleGame.targetCircleIndex !== undefined)
		{
			var canvasPosition = $(this).offset();
			var mouseX = pageX - canvasPosition.left;
			var mouseY = pageY - canvasPosition.top;

			var circle = untangleGame.circles[untangleGame.targetCircleIndex];
			circle.x = mouseX;
			circle.y = mouseY;

			untangleGame.connectCircles();
			untangleGame.updateLineIntersection();
		}
		untangleGame.updateLevelProgress();
	});

	//limpiar valor del target
	$("#game").bind("mouseup touchend", function(e)
	{
		untangleGame.targetCircleIndex = undefined;
		untangleGame.checkLevelCompleteness();
	});
};