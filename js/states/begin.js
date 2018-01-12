var begin = function(){};
	
begin.prototype = {
	init: function(){
		this.title = game.add.sprite(game.world.centerX, game.world.centerY/2, 'title');
		this.text = game.make.text(this.title.x, this.title.y+300, "- PRESS R TO START -",{fill: 'white'});
		this.textReflect = game.make.text(this.text.x, this.text.y+ 20, "- PRESS R TO START -",{fill: 'white'});
		utils.centerGameObjects([this.title, this.text, this.textReflect]);	
		var grd = this.textReflect.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
		grd.addColorStop(0, 'rgba(255,255,255,0)');
		grd.addColorStop(1, 'rgba(255,255,255,0.8)');    		
		this.textReflect.fill = grd;	    
	    this.textReflect.scale.y = -1;	
	},

	preload: function(){
 		game.add.existing(this.title).scale.setTo(0.7);	
 		game.add.existing(this.text);	
 		game.add.existing(this.textReflect);
 		//this.load.setPreloadSprite(this.loadingBar);
	
	},

	create: function(){
		this.timer = 0;
	},


	update: function(){
		this.timer += game.time.elapsed;
		if(this.timer >= 500 ){
			this.timer = 0;
			this.text.visible = !this.text.visible;
			this.textReflect.visible = !this.textReflect.visible;
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.R)){
			game.state.start('gameBody');
		}

	}


}    	


