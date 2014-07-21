window.onload = function(){
	enchant();  // enchant.jsの利用宣言　必ず最初に宣言する

	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var game = new Core(window_width,window_height);
	game.fps = 30.0;

	game.onload = function(){
		// メインループ（この中に処理を書いていきます)
		game.on('enterframe', function(){
 			if(game.input.up){
	 			console.log('方向キーの上キーが押されました');
 			}else if (game.input.down){
	 			console.log('方向キーの下キーが押されました');
 			}else if (game.input.left){
	 			console.log('方向キーの左キーが押されました');
 			}else if (game.input.right){
	 			console.log('方向キーの右キーが押されました');
 			}
		});
	}

	game.start();
};