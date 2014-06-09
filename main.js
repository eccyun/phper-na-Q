enchant();

/*
 *
	CoreObject
	- rootScene
 *
 */

window.onload = function(){

	// CoreObjectの定義
	var core = new Core(320,320);
	core.fps = 15.0;

	core.preload('chara1.png');
	core.onload = function(){
		var label = new Label();
		label.x   = 300;
		label.y   = 5;
		label.color = 'red';
		label.font  = '14px Arial';
		label.text  = '0';
		label.on('enterframe', function(){
			// フレームカウントアップ
//			label.text = (core.frame/core.fps).toFixed(2);
		});

		// var bear   = new Sprite(32,32);
		// bear.image = core.assets['chara1.png'];

		// bear.x     = 0;
		// bear.y     = 0;
		// bear.frame = 1;

		// // フレームアップの処理(メインループ)
		// bear.addEventListener('enterframe', function(){
		// 	// キー入力操作
		// 	if(core.input.left) this.x -= 5;
		// 	if(core.input.right) this.x += 5;
		// 	if(core.input.up) this.y -= 5;
		// 	if(core.input.down) this.y += 5;

		// 	// intersect
		// 	// if(this.intersect(enemy)){
		// 	// 	label.text = 'hit'
		// 	// }

		// 	// within
		// 	if(this.within(enemy, 10)){
		// 		// label.text = 'hit';
		// 		core.pushScene(gameOverScene);
		// 		core.stop();
		// 	}

		// });

		var Bear = Class.create(Sprite,{
			initialize : function(x, y){
				Sprite.call(this, 32, 32);
				this.x = x;
				this.y = y;
				
				this.frame   = rand(5);
				this.opacity = rand(100)/100;

				this.image = core.assets['chara1.png'];
				this.on('enterframe', function(){
					this.rotate(rand(10));
				});

				core.rootScene.addChild(this);
			}
		})

		var bears = [];
		for(var i = 0; i < 100; i++){
			bears[i] = new Bear(10, 10+i);

			console.log(i);
		}

		var enemy   = new Sprite(32,32);
		enemy.image = core.assets['chara1.png'];

		enemy.x = 80;
		enemy.y = 0;
		enemy.frame = 5;

// 		bear.on('touchstart', function(){
// //			core.rootScene.removeChild(this);
// 		});

		var gameOverScene = new Scene();
		gameOverScene.backgroundColor = 'black';

		core.rootScene.on('touchstart', function(e){
			// bear.x = e.x;
			// bear.y = e.y;
		});

//		core.rootScene.addChild(bear);
		core.rootScene.addChild(enemy);
		core.rootScene.addChild(label);



	}

	core.start();
};

function rand(n){
	return Math.floor(Math.random()+(n+1));
}