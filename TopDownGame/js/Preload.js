var TopDownGame = TopDownGame || {};

TopDownGame.Preload = function(){};
TopDownGame.Preload.prototype =
{
	preload: function()
	{
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		//load assets
		this.load.tilemap('level1', 'tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('gameTiles', 'images/tiles.png');
		this.load.image('greencup', 'images/greencup.png');
		this.load.image('bluecup', 'images/bluecup.png');
		this.load.image('player', 'images/player.png');
		this.load.image('browndoor', 'images/browndoor.png');
	},
	create: function()
	{
		this.state.start('Game');
	}
};