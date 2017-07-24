var AgroShop = AgroShop || {};

AgroShop.Preload = function(){};

AgroShop.Preload.prototype =
{
	preload: function()
	{
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loadbar');
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		//load assets here
		this.load.image('fondo', 'images/background.png');
		this.load.image('bar', 'images/ProductBar.png');
		this.load.image('icon1', 'images/iconagro01.jpg');
		this.load.image('icon2', 'images/iconagro02.jpeg');
		this.load.image('icon3', 'images/iconagro03.jpeg');
	},
	create: function()
	{
		this.state.start('Agroapp');
	}
};