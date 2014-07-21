window.onload = function(){
	enchant();  				// enchant.jsの利用宣言　必ず最初に宣言する

	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var game = new Core(window_width,window_height);
	game.fps = 30.0;
	game.preload('./libs/images/chara1.png','./libs/images/pipe.png');

	game.onload = function(){
		// 障害物の定義
		var pipe   = new Sprite(64, window_height);
		pipe.image = game.assets['./libs/images/pipe.png'];
		pipe.x     = window_width;
		pipe.y     = 100;
		pipe.frame = 0;
		game.rootScene.addChild(pipe);	// 障害物を画面上に描画する

		// 画面全体とは別にスプライトに対しても毎フレームごとの動きを定義できる
		pipe.on('enterframe', function(){
			this.x -= 2;
		});

		// メインループ（この中に処理を書いていきます)
		game.on('enterframe', function(){

		});
	}

	game.start();
};