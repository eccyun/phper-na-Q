enchant();  // enchant.jsの利用宣言　必ず最初に宣言する

window.onload = function(){
	var game_score    = 0;
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./libs/images/chara1.png', 
             	 './libs/images/background.png',
             	 './libs/images/pipe.png');

	core.onload = function(){
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

		// 定義した画像を、事前に描画する
		core.rootScene.addChild(bg);
		core.rootScene.addChild(bg2);

	    // クマ (プレイヤーの定義)
	    var size   = 32;
	    var bear   = new Sprite(size,size);
	    bear.image = core.assets['./libs/images/chara1.png'];   // 描画する画像を指定する
	    bear.x     = (window_width/2)-(size/2);                 // 画像の描画位置の指定(x軸)
	    bear.y     = (window_height/2)-(size/2);                // 画像の描画位置の指定(軸)
	    bear.frame = 0;                                         // 描画領域の範囲を指定する
		core.rootScene.addChild(bear);							// クマを画面上に描画する

		// メインループ（この中に処理を書いていきます)
		core.on('enterframe', function(){

		});
	}

	core.start();
};

function makeRandomInt(value){
	return Math.floor( Math.random() * value);
}