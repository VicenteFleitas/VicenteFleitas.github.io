var AgroShop = AgroShop || {};

AgroShop.Agroapp = function(){};

AgroShop.Agroapp.prototype =
{
	create: function()
	{
		this.background = this.game.add.sprite(0,0,'fondo');
		this.createBar('icon1');
		this.createBar('icon2', 1);
		this.createBar('icon3', 2);
	},
	createBar: function(icon, n = 0)
	{
		this.bar = this.game.add.sprite(5, 100 + 140*n, 'bar');
		this.icono = this.game.add.sprite(10, 108 + 140*n, icon);
		this.icono.scale.setTo(.4);
	}
};