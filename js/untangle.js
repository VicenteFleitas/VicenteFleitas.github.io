if (untangleGame === undefined) 
{
	var untangleGame = {};
}
// Entry point
$(document).ready(function()
{
	var canvas = document.getElementById("game");
	untangleGame.ctx = canvas.getContext("2d");

	var width = canvas.width;
	var height = canvas.height;

	untangleGame.setUpCurrentLevel();
	
	untangleGame.handleInput();
	//ver si hay interseccion al principio.
	untangleGame.updateLineIntersection();

	untangleGame.loadImages();

	//loop
	setInterval(gameloop, 30);


	function gameloop()
	{
		//clear canvas before re draw
		untangleGame.clear();
		untangleGame.drawBackground();
		untangleGame.drawAllLines();
		untangleGame.drawAllCircles();
		untangleGame.drawLevelProgress();
	}


});