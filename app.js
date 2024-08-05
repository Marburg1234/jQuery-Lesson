
// CSSを上書きしてjQueryを適用する
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// 上⇒下におろして出現するアニメーションを適用する
// ()の中で速度を調節できる 今は(3000)になっている
// cssでdisplay: none;を設定する
// $(function(){
//   $('.box1').slideDown(3000);
// });

// 下→上に出現するアニメーションを適用する
// display: none;は不要
// slideUpを記述
// $(function(){
//   $('.box1').slideUp(3000);
// });

// 非表示の要素をjQueryで表示させる
// display: none;を記述する
// showを使用してCSSで非表示にした要素を表示する
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// 表示している要素を非表示に設定する
// display: none;がない部分
// hide 隠す機能を使う
// $(function(){
//   $('.box1').hide(3000);
// });

// .show と .hide 要素を表示・非表示の設定
// .sideDown .sideUp .アニメーションを適用する


// 確認問題
// $(function(){
// $('.box1').slideDown(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px',
//     'width': '200px'
//   }).slideUp();
//   });
// });

$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});