// Global Variables
var
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer;



 Main.prototype = {
 	preload: function () {
 		  game.load.image("title", "../myop/assets/img/title.png");
	    game.load.image('loading', "../myop/assets/img/loading.png");
	    game.load.script('polyfill',   '../myop/js/lib/polyfill.js');
	    game.load.script('utils',   '../myop/js/lib/utils.js');
	    game.load.script('splash',  '../myop/js/states/splash.js');

 	},

 	create: function(){
    game.state.add('splash', splash);
    game.state.start('splash');
 	}


 };

 game.state.add('Main', Main);
 game.state.start('Main');