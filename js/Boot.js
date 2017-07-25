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
		//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 450;
		this.scale.minHeight = 800;
		this.scale.maxWidth = 2880;
		this.scale.maxHeight = 1920;
		// this.scale.pageAlignHorizontally = true;
		// this.scale.pageAlignVertically = true;
		// this.game.scale.windowConstraints.bottom = "visual";
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT; // Phaser.ScaleManager.SHOW_ALL USER_SCALE

	    this.scale.pageAlignHorizontally = true;
	    this.scale.pageAlignVertically = true;

	    this.scale.setResizeCallback(function () 
	    {
	        var width = window.innerWidth;
	        var height = window.innerHeight;
	        console.log('size: ' + width + ', ' + height);
	        this.camera.setSize(width, height);
	        this.game.renderer.resize(width, height);
	    }, this);

		this.state.start('Preload');
	}
};