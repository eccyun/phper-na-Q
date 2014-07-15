enchant();  // enchant.jsの利用宣言　必ず最初に宣言する

window.onload = function(){
	var window_width  = 320;    // ゲーム領域の幅
	var window_height = 568;    // ゲーム領域の高さ

	// CoreObjectの定義
	var core = new Core(window_width,window_height);
	core.fps = 30.0;

	core.onload = function(){
		// メインループ（この中に処理を書いていきます)
		core.on('enterframe', function(){
 			if(core.input.up){
	 			console.log('方向キーの上キーが押されました');
 			}else if (core.input.down){
	 			console.log('方向キーの下キーが押されました');
 			}else if (core.input.left){
	 			console.log('方向キーの左キーが押されました');
 			}else if (core.input.right){
	 			console.log('方向キーの右キーが押されました');
 			}
		});
	}

	core.start();
};