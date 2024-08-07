$(function(){
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});


// scrollTopは、スクロール位置を取得できるメソッド
// animateは、アニメーション効果を設定するjQueryの関数
// event.preventDefault()は、aタグの機能を無効にするメソッド
// 今回はaタグの機能、画面を別のページへ遷移するリンクがいらないのでこれを適用する