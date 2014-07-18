window.onload = function(){
	enchant();

	// CoreObjectの定義
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./libs/images/chara1.png', 
				 './libs/images/background.png',
				 './libs/images/pipe.png');

	core.onload = function(){
		// 背景定義
		var bg   = new Sprite(window_width, window_height);
		bg.image = core.assets['./libs/images/background.png'];
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

		// 背景定義
		var bg2   = new Sprite(window_width, window_height);
		bg2.image = core.assets['./libs/images/background.png'];
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
 		core.rootScene.addChild(bg);
		core.rootScene.addChild(bg2);

		var game_score    = 0;

		// クマ (プレイヤーの定義)
		var size   = 32;
		var bear   = new Sprite(size,size);
		bear.image = core.assets['./libs/images/chara1.png'];	// 描画する画像を指定する
		bear.x     = (window_width/2)-(size/2);					// 画像の描画位置の指定(x軸)
		bear.y     = (window_height/2)-(size/2);				// 画像の描画位置の指定(y軸)
		bear.frame = 0;											// 描画領域の範囲を指定する
		core.rootScene.addChild(bear);							// クマを画面上に描画する

		// スコア表示用のラベル
		var score_label   = new Label(String(game_score));
		score_label.x     = (window_width/2)-(score_label._boundWidth/2);
		score_label.y     = 10;
		score_label.color = '#ffffff';

		// メインループ（この中に処理を書いていきます)
		core.on('enterframe', function(){
			// 上方向へ移動
			if(core.input.up){
	 			bear.y = bear.y - 4;
 			}
 			// 下方向へ移動
 			if (core.input.down){
	 			bear.y = bear.y + 4;
 			}

 			// 60フレームおきに、土管を表示する
 			if(core.frame%60==0){
				var base_y    = 338;
				var decrement = Math.floor(Math.random()*150);

				// 土管オブジェクトの定義
				var pipe   = new Sprite(64, 568);
				pipe.image = core.assets['./libs/images/pipe.png'];
				pipe.x     = window_width;
				pipe.y     = base_y-decrement;
				pipe.frame = 0;

				// 土管の移動
				pipe.on('enterframe', function(){
					this.x -= 3;
					// 障害物とぶつかったら、ゲームを終了する
					if (bear.intersect(this)) {
						core.stop();
 						window.alert("GAME OVER...\nScore:"+game_score);
				    }

				    // 土管通過後
				    if((this.x == (window_width/2)-(pipe.width/2))){
				    	game_score       = game_score+1;
				    	score_label.text = String(game_score);
				    }
				});

				// 土管オブジェクトの定義
				var pipe2   = new Sprite(64, 568);
				pipe2.image = core.assets['./libs/images/pipe.png'];
				pipe2.x     = window_width;
				pipe2.y     = -base_y-decrement;
				pipe2.frame = 1;

				// 土管の移動
				pipe2.on('enterframe', function(){
					this.x -= 3;
					// 障害物とぶつかったら、ゲームを終了する
					if (bear.intersect(this)) {
						core.stop();
 						window.alert("GAME OVER...\nScore:"+game_score);
				    }

				    // 土管通過後
				    if((this.x == (window_width/2)-(pipe2.width/2))){
				    	game_score       = game_score+1;
				    	score_label.text = String(game_score);
				    }
				});

				this.rootScene.addChild(pipe);
				this.rootScene.addChild(pipe2);
				this.rootScene.addChild(score_label);
 			}
		});
	}

	core.start();
};