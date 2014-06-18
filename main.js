enchant();

// 関数群

function makeRandomInt(value){
	return Math.floor( Math.random() * value);
}


window.onload = function(){
	var scene_list    = ["start", "main", "end" ];
	var scene_status  = scene_list[0]; 

	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./images/chara1.png', './images/background.png', './images/pipe.png');

	core.onload = function(){
		// クマ (プレイヤーの定義)
		var bear   = new Sprite(32,32);
		bear.image = core.assets['./images/chara1.png'];
		bear.x     = (window_width/2)-(32/2);
		bear.y     = (window_height/2)-(32/2);
		bear.frame = 5;

		// アニメーションの定義
 		bear.on('enterframe', function(){
 			if(scene_status=="main"){
	 			this.y += 5;
	 		}
 		});

 		// タイムライン機能　一定間隔ごとに処理を繰り返す
		core.rootScene.tl.then(function () {
			if(scene_status=="main"){
				var base_y    = 368;
				var decrement = makeRandomInt(150);

				// 土管オブジェクトの定義
				var pipe   = new Sprite(64, 568);
				pipe.image = core.assets['./images/pipe.png'];
				pipe.x     = window_width;
				pipe.y     = base_y-decrement;
				pipe.frame = 0;

				// 土管の移動
		 		pipe.on('enterframe', function(){
		 			this.x -= 3;
		 			// 画面外に到達したら削除する
		 			if(this.x <= -window_width){
		 				this.parentNode.removeChild(this);
		 			}

					if (bear.intersect(this)) {
	                    core.stop();
	                }
		 		});

				// 土管オブジェクトの定義
				var pipe2   = new Sprite(64, 568);
				pipe2.image = core.assets['./images/pipe.png'];
				pipe2.x     = window_width;
				pipe2.y     = -base_y-decrement;
				pipe2.frame = 1;

				// 土管の移動
		 		pipe2.on('enterframe', function(){
		 			this.x -= 3;
		 			// 画面外に到達したら削除する
		 			if(this.x <= -window_width){
		 				this.parentNode.removeChild(this);
		 			}

					if (bear.intersect(this)) {
	                    core.stop();
	                }
		 		});

				this.addChild(pipe);
				this.addChild(pipe2);
			}
		}).delay(60).loop();

		// バックグランド定義
		var bg   = new Sprite(window_width, window_height);
		bg.image = core.assets['./images/background.png'];
		bg.x     = 0;
		bg.y     = 0;
		bg.frame = 0;
		
		// 背景のスクロール
 		bg.on('enterframe', function(){
 			this.x -= 10;

 			// 画面外に到達したら座標を調整
 			if(this.x <= -window_width){
 				this.x = window_width;
 			}
  		});

		// バックグランド定義
		var bg2   = new Sprite(window_width, window_height);
		bg2.image = core.assets['./images/background.png'];
		bg2.x     = window_width;
		bg2.y     = 0;
		bg2.frame = 0;
		
		// 背景のスクロール
 		bg2.on('enterframe', function(){
 			this.x -= 10;
 			// 画面外に到達したら座標を調整
 			if(this.x <= -window_width){
 				this.x = window_width;
 			}
 		});


 		// メインシーンのイベント定義
		core.rootScene.on('touchstart', function(){
	 		// 待ち状態ならゲームスタート
	 		if(scene_status=="start"){
	 			scene_status = scene_list[1];
	 		}

 			if(scene_status=="main"){
	 			bear.y -=80;
	 		}
 		});

 		core.rootScene.addChild(bg);
		core.rootScene.addChild(bg2);
		core.rootScene.addChild(bear);
	}

	core.start();
};