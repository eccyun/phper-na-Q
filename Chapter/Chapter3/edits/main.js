enchant();  // enchant.jsの利用宣言　必ず最初に宣言する

window.onload = function(){
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;
	core.preload('./libs/images/chara1.png');

	core.onload = function(){
		// クマ (プレイヤーの定義)
		var size   = 32;
		var bear   = new Sprite(size,size);
		bear.image = core.assets['./libs/images/chara1.png'];	// 描画する画像を指定する
		bear.x     = (window_width/2)-(size/2);					// 画像の描画位置の指定(x軸)
		bear.y     = (window_height/2)-(size/2);				// 画像の描画位置の指定(軸)
		bear.frame = 0;											// 描画領域の範囲を指定する
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