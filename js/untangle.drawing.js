if(untangleGame === undefined)
{
	var untangleGame = {};
}

untangleGame.thinLineThickness = 1;
untangleGame.boldLineThickness = 5;
untangleGame.lines = [];

untangleGame.drawCircle = function(x,y,radius)
{
	var ctx = untangleGame.ctx;
	ctx.fillStyle = "GOLD";
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
};

untangleGame.drawLine = function(ctx, x1, y1, x2, y2, thickness)
{
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineWidth = thickness;
	ctx.strokeStyle = "#009988";
	ctx.stroke();
};

untangleGame.connectCircles = function()
{
	//set up all lines based on the circles relationship
	var level = untangleGame.levels[untangleGame.currentLevel];
	untangleGame.lines.length = 0;
	for (var i in level.relationship) 
	{
		var connectedPoints = level.relationship[i].connectedPoints;
		var startPoint = untangleGame.circles[i];
		for (var j in connectedPoints) 
		{
			var endPoint = untangleGame.circles[connectedPoints[j]];
			untangleGame.lines.push(new untangleGame.Line(startPoint, endPoint, untangleGame.thinLineThickness));
		}
	}
};

untangleGame.clear = function()
{
	var ctx = untangleGame.ctx;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

untangleGame.drawAllLines = function()
{
	//dibujar todas las lineas del array lines
	for (var i = 0; i < untangleGame.lines.length; i++) 
	{
		var line = untangleGame.lines[i];
		var startPoint = line.startPoint;
		var endPoint = line.endPoint;
		var thickness = line.thickness;
		untangleGame.drawLine(untangleGame.ctx, startPoint.x, startPoint.y, endPoint.x, endPoint.y, thickness);
	}
};

untangleGame.drawAllCircles = function()
{
	//dibujar todos los circulos del array circles
	for (var i = 0; i < untangleGame.circles.length; i++) 
	{
		var circle = untangleGame.circles[i];
		untangleGame.drawCircle(circle.x, circle.y, circle.radius);
	}
};

untangleGame.drawLevelProgress = function()
{
	var ctx = untangleGame.ctx;
	ctx.font = "26px 'Coving'";
	ctx.fillStyle = "WHITE";
	ctx.textAlign = "left";
	ctx.textBaseline = "bottom";
	ctx.fillText("Puzzle " + untangleGame.currentLevel + ", Completeness: " + untangleGame.levelProgress + "%", 60, ctx.canvas.height-60);
}

untangleGame.loadImages = function()
{
	//load the background image
	untangleGame.background = new Image();
	untangleGame.background.onerror = function()
	{
		console.log("Error loading the image.");
	}
	untangleGame.background.src = "images/board.png";
	//load the guide sprite image
	untangleGame.guide = new Image();
	untangleGame.guide.onload = function()
	{
		//setup timer to switch the display frame of the guide sprite
		untangleGame.guideFrame = 0;
		setInterval(untangleGame.guideNextFrame, 500);
	}
	untangleGame.guide.src = "images/guide_sprite.png";
}

untangleGame.drawBackground = function()
{
	// draw the image background
	untangleGame.ctx.drawImage(untangleGame.background, 0, 0);
}

untangleGame.guideNextFrame = function()
{
	untangleGame.guideFrame++;
	//there are only 6 frames (0-5) in the guide animation.
	//we loop back the frame number to frame 0 after frame 5.
	if(untangleGame.guideFrame > 5)
	{
		untangleGame.guideFrame = 0;
	}
}
untangleGame.drawGuide = function()
{
	var ctx = untangleGame.ctx;
	//draw guide animation
	if(untangleGame.currentLevel === 0)
	{
		//the dimension of each frame is 80x130.
		var nextFrameX = untangleGame.guideFrame*80;
		ctx.drawImage(untangleGame.guide, nextFrameX, 0, 80, 130, 325, 130, 80, 130);
	}
};