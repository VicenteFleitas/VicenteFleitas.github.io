var AgroShop = AgroShop || {};

AgroShop.game = new Phaser.Game(800, 480, Phaser.AUTO, '');
AgroShop.game.state.add('Boot', AgroShop.Boot);
AgroShop.game.state.add('Preload', AgroShop.Preload);
AgroShop.game.state.add('Agroapp', AgroShop.Agroapp);

AgroShop.game.state.start('Boot');