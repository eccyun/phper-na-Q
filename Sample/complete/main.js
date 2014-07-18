enchant();

// 関数群

function makeRandomInt(value){
	return Math.floor(Math.random() * value);
}


window.onload = function(){
	var scene_list    = ["start", "main", "end" ];
	var scene_status  = scene_list[0]; 
	var game_score    = 0;
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./libs/images/chara1.png', './libs/images/background.png', './libs/images/pipe.png','./libs/images/status_banner.png');

	core.onload = function(){
		// プレイヤーの定義
		var bear   = new Sprite(32,32);
		bear.image = core.assets['./libs/images/chara1.png'];
		bear.x     = (window_width/2)-(32/2);
		bear.y     = (window_height/2)-(32/2);
		bear.frame = 5;

 		// ゲームスタートのバナー定義
 		var status_banner   = new Sprite(200, 60);
		status_banner.image = core.assets['./libs/images/status_banner.png'];
		status_banner.x     = (window_width/2)-(200/2);
		status_banner.y     = (window_height/2)-120;
		status_banner.frame = 1;

		// スコア表示用のラベル
		var score_label   = new Label(String(game_score));
		score_label.x     = (window_width/2)-(score_label._boundWidth/2);
		score_label.y     = (window_height/2)-120;
		score_label.color = '#ffffff';

 		// タイムライン機能　一定間隔ごとに処理を繰り返す
		core.rootScene.tl.then(function () {
			if(scene_status=="main"){
//				var base_y    = 368;
				var base_y    = 338;
				var decrement = makeRandomInt(150);

				// 土管オブジェクトの定義
				var pipe   = new Sprite(64, 568);
				pipe.image = core.assets['./libs/images/pipe.png'];
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
			 			scene_status        = scene_list[2];
			 			status_banner.frame = 0;
			 			this.parentNode.removeChild(bear);
			 			this.parentNode.addChild(status_banner);

						score_label.y = (window_height/2);
	                }

	                // 土管通過後
	                if((this.x == (window_width/2)-(pipe.width/2)) && scene_status=="main"){
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
		 			// 画面外に到達したら削除する
		 			if(this.x <= -window_width){
		 				this.parentNode.removeChild(this);
		 			}

					if (bear.intersect(this)) {
			 			scene_status        = scene_list[2];
			 			status_banner.frame = 0;
			 			this.parentNode.removeChild(bear);
			 			this.parentNode.addChild(status_banner);

						score_label.y = (window_height/2);
	                }
		 		});

				this.addChild(pipe);
				this.addChild(pipe2);
				this.addChild(score_label);
			}
		}).delay(60).loop();

 		// メインシーンのイベント定義
		core.rootScene.on('enterframe', function(){
 			if(scene_status=="main"){
	 			if(core.input.up){
		 			bear.y -= 5;
	 			}else if (core.input.down){
		 			bear.y += 5;
	 			}
	 		}

	 		// 待ち状態にキー入力があったらゲームスタート
	 		if(scene_status=="start"){
	 			if(core.input.up||core.input.down){
		 			scene_status = scene_list[1];
					core.rootScene.removeChild(status_banner);
					core.rootScene.addChild(score_label);
	 			}
	 		}
 		});

		// バックグランド定義
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

		// バックグランド定義
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
		core.rootScene.addChild(status_banner);
		core.rootScene.addChild(bear);
	}

	core.start();
};