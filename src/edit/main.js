enchant();

// 関数群

function makeRandomInt(value){
	return Math.floor( Math.random() * value);
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
		// クマ (プレイヤーの定義)
		var bear   = new Sprite(32,32);
		bear.image = core.assets['./libs/images/chara1.png'];
		bear.x     = (window_width/2)-(32/2);
		bear.y     = (window_height/2)-(32/2);
		bear.frame = 5;

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
		core.rootScene.addChild(bear);
	}

	core.start();
};