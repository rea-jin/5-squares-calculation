$(function(){

// ランダム数字をセット

const row = 5;
const col = 5;
const mas = row * col;

// startボタンを押したら
$('#start').on('click', function(){
    // ランダム数字を作成
    // 10こ必要なので、１０回繰り返す
    // １行目を作成 数字５つ
    for(let i = 1; i <= row; i++){
        // 1~10まで。実数に変更
        var num1 = Math.floor( Math.random() * 10 + 1 );

        // inputタグにクラス+iを挿入
        $(".output").append($("<input>").attr({id : "i_"+i, class : "row", type: "button", value: num1}));
    }
    // １列目の数字を作成
    for(let j = 1; j <= col; j++){
        // 1~10まで。実数に変更
        var num2 = Math.floor( Math.random() * 10 + 1 );

        // inputタグにクラス+iを挿入
        $(".output").append($("<input>").attr({id : "j_"+j, class : "col", type: "button", value: num2}));

    }

    for(let k = 1; k <= mas; k++ ){
        $(".output").append($("<input>").attr({id : "k-"+k, class : "mas", type: "text", value: ""}));

    }
})






});