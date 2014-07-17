enchant();  // enchant.jsの利用宣言　必ず最初に宣言する

window.onload = function(){
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./libs/images/chara1.png','./libs/images/pipe.png');

	core.onload = function(){
		// クマ (プレイヤーの定義)
		var size   = 32;
		var bear   = new Sprite(size,size);
		bear.image = core.assets['./libs/images/chara1.png'];	// 描画する画像を指定する
		bear.x     = 10;										// 画像の描画位置の指定(x軸)
		bear.y     = (window_height/2)-(size/2);				// 画像の描画位置の指定(軸)
		bear.frame = 0;											// 描画領域の範囲を指定する

		// 障害物の定義
		var pipe   = new Sprite(64, 568);
		pipe.image = core.assets['./libs/images/pipe.png'];
		pipe.x     = window_width-128;
		pipe.y     = 100;
		pipe.frame = 0;
		core.rootScene.addChild(bear);	// クマを画面上に描画する
		core.rootScene.addChild(pipe);	// 障害物を画面上に描画する

		// メインループ（この中に処理を書いていきます)
		core.on('enterframe', function(){
			// クマと土管が衝突したらif文の中へ
 			if(bear.intersect(pipe)){
 				core.stop();
 				window.alert("GAME OVER...");
 			}

			// 上方向へ移動
			if(core.input.up){
	 			bear.y = bear.y - 4;
 			}
 			// 下方向へ移動
 			if (core.input.down){
	 			bear.y = bear.y + 4;
 			}
 			// 左方向へ移動
 			if (core.input.left){
	 			bear.x = bear.x - 4;
 			}
 			// 右方向へ移動
 			if (core.input.right){
	 			bear.x = bear.x + 4;
 			}
		});
	}

	core.start();
};