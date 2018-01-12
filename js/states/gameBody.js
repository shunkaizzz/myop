var gameBody = function(){};
var map;
var layer;
var player;
var controls = {};
var playerSpeed = 150;
var playerJump = 200;
var mod = 0;
var chest = {};
var downButtonUp = true;
gameBody.prototype = {
	preload : function(){
		this.stage.backgroundColor = '#0099ff';
		this.physics.arcade.gravity.y = 500;

	},

	create : function(){
		map = this.add.tilemap('level1', 20, 20);
		map.addTilesetImage('tileset1');
		
		layer = map.createLayer(0);
		layer.resizeWorld();
		this.add.existing(layer);

		map.setCollisionBetween(1,10000);
		map.tileWidth = 10;

		player = this.add.sprite(100,500,'luffy');
		player.scale.setTo(0.3);
		utils.centerGameObjects([player]);	

		this.camera.follow(player);
		this.physics.arcade.enable(player);

		player.body.collideWorldBounds = true;
		player.animations.add('idle',1, true);		
		player.animations.add('run',1, true);	
		controls = {
			right : this.input.keyboard.addKey(Phaser.Keyboard.D),
			left : this.input.keyboard.addKey(Phaser.Keyboard.A),
			up : this.input.keyboard.addKey(Phaser.Keyboard.W),
			down : this.input.keyboard.addKey(Phaser.Keyboard.S),
		};

		chest =  [4779, 4780, 4781];
		map.setTileIndexCallback(chest, this.getChest, this);

	},

	update : function(){
		
		this.physics.arcade.collide(player, layer);

		player.body.velocity.x = 0;
		if(controls.up.isDown){
			player.animations.play('jump');
		}
		if(controls.right.isDown){
			//player.animations.play('run');
			player.body.velocity.x += playerSpeed;
		}
		if(controls.left.isDown){
			//player.animations.play('run');
			player.body.velocity.x -= playerSpeed;			
		}
		if(controls.up.isDown && player.body.onFloor()){
			player.body.velocity.y -= playerJump;			
		}
		
		if(controls.down.isUp){
			downButtonUp = true;
		}
		if(controls.down.isDown && downButtonUp){
			playerJump = 200;
			if(mod == 0){
				player.scale.setTo(0.1);
				mod = 1;
			}else if(mod == 1){
				player.scale.setTo(0.3);
				mod = 2;
			}else if(mod == 2){
				player.scale.setTo(0.5);
				playerJump = 300;
				mod = 3;
			}else if(mod == 3){
				player.scale.setTo(0.3);
				mod = 0;
			}
			this.playerJump();
		}
	},

	playerJump : function(){
		player.body.velocity.y  -= playerJump;
		downButtonUp = false;
	},

	getChest : function(){
		game.state.start('gameOver');
	}	




}