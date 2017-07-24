var AgroShop = AgroShop || {};

AgroShop.Boot = function(){};

AgroShop.Boot.prototype =
{
	preload: function()
	{
		this.load.image('logo', 'images/iconagro01.jpg');
		this.load.image('loadbar', 'images/preloader-bar.png');
	},
	create: function()
	{
		this.game.stage.backgroundColor = '#fff';
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 240;
		this.scale.minHeight = 400;
		this.scale.maxWidth = 2880;
		this.scale.maxHeight = 1920;
		this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;

		this.state.start('Preload');
	}
};