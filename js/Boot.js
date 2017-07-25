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
		this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;//SHOW_ALL //EXACT_FIT //USER_SCALE
		this.scale.minWidth = 450;
		this.scale.minHeight = 800;
		this.scale.maxWidth = 1920;
		this.scale.maxHeight = 2880;
	    this.scale.pageAlignHorizontally = true;
	    //this.scale.pageAlignVertically = true;

		this.state.start('Preload');
	}
};