var TopDownGame = TopDownGame || {};

TopDownGame.Boot = function(){};

TopDownGame.Boot.prototype =
{
	preload: function()
	{
		this.load.image('preloadbar', 'images/preloader-bar.png');
	},
	create: function()
	{
		this.game.stage.backgroundColor = '#fff';

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontlly = true;
		this.scale.pageAlignVertically = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.state.start('Preload');
	}
}