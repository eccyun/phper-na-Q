enchant();

window.onload = function(){

	// CoreObjectの定義
	var core = new Core(640,1136);
	core.fps = 15.0;

	core.preload('chara1.png', 'background.png');

	core.onload = function(){
		// バックグランド定義
		var bg   = new Sprite(640, 1136);
		bg.image = core.assets['background.png'];
		bg.x     = 0;
		bg.y     = 0;
		bg.frame = 0;
		
		// 背景のスクロール
 		bg.on('enterframe', function(){
 			this.x -= 10;

 			// 画面外に到達したら座標を調整
 			if(this.x <= -640){
 				this.x = 640;
 			}
  		});

		// バックグランド定義
		var bg2   = new Sprite(640, 1136);
		bg2.image = core.assets['background.png'];
		bg2.x     = 640;
		bg2.y     = 0;
		bg2.frame = 0;
		
		// 背景のスクロール
 		bg2.on('enterframe', function(){
 			this.x -= 10;
 			// 画面外に到達したら座標を調整
 			if(this.x <= -640){
 				this.x = 640;
 			}
 		});
 		core.rootScene.addChild(bg);
		core.rootScene.addChild(bg2);

		// クマ (プレイヤーの定義)
		var bear   = new Sprite(32,32);
		bear.image = core.assets['chara1.png'];
		bear.x     = 0;
		bear.y     = 0;
		bear.frame = 0;

		// アニメーションの定義
 		bear.on('enterframe', function(){


 		});
		core.rootScene.addChild(bear);
	}

	core.start();
};