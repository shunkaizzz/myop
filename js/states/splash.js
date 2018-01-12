var splash = function(){};

splash.prototype = {
		
	loadScripts: function(){
	    game.load.script('style', '../myop/js/lib/style.js');
	    game.load.script('mixins', '../myop/js/lib/mixins.js');
	    //game.load.script('WebFont', 'vendor/webfontloader.js');
	    //game.load.script('gamemenu','states/GameMenu.js');
	    game.load.script('gameBody', '../myop/js/states/gameBody.js');
	    game.load.script('gameOver','../myop/js/states/gameover.js');
	    //game.load.script('credits', 'states/Credits.js');
	    game.load.script('options', '../myop/js/states/option.js');
	    game.load.script('begin', '../myop/js/states/begin.js');		
	},

	loadBgm: function(){
		game.load.audio('bgm1', '../myop/assets/bgm/bgm1.mp3');
	},

	loadImage: function(){
		game.load.tilemap('level1', '../myop/assets/map/map1.csv');
		game.load.image('luffy', '../myop/assets/img/luffy.png');
		game.load.image('tileset1', '../myop/assets/img/tileset3.png');
	},

	loadFont: function(){

	},

	init: function(){
		this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
		this.title = game.make.sprite(game.world.centerX, game.world.centerY/2, 'title');
	    this.status = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
	    utils.centerGameObjects([this.title, this.status]);		
	},

	preload: function(){
 		game.add.existing(this.title).scale.setTo(0.7);	
 		game.add.existing(this.loadingBar);	
 		game.add.existing(this.status);
 		this.load.setPreloadSprite(this.loadingBar);
	    this.loadScripts();
	    this.loadImage();
	    this.loadFont();
	    this.loadBgm(); 		
	},

	addGameStates: function () {

	    game.state.add("begin",begin);
	    game.state.add("gameBody", gameBody);
	    game.state.add("gameOver",gameOver);
	},


	addGameMusic: function () {
	    music = game.add.audio('bgm1');
	    music.loop = true;
	    music.play();
	},


	create: function(){
	    this.status.setText('Ready!');
	    this.addGameStates();
	    this.addGameMusic();	
	    setTimeout(function () {    	
	    	game.state.start('begin');
    	},1000);    	
	},


}