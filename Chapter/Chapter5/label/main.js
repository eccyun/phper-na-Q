window.onload = function(){
    enchant();

    // CoreObjectの定義
    var window_width  = 320;    // ゲーム領域の幅
    var window_height = 568;    // ゲーム領域の高さ

    var game = new Core(window_width,window_height);
    game.fps = 30.0;

    game.onload = function(){
        // スコア表示用のラベル
        var score_label   = new Label(String(1192));        // new Label(1192);とかだとエラーになる
        var label_width   = score_label._boundWidth;        // 描画したラベルの幅を取得する
        var label_height  = score_label._boundHeight;       // 描画したラベルの高さを取得する

        score_label.x     = 10;
        score_label.y     = 10;
        score_label.color = '#000';
        game.rootScene.addChild(score_label);
    }

    game.start();
};